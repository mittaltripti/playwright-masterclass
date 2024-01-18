import { BeforeAll, AfterAll, Before, After, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import {myPage} from "./../fixtures/base";
const fs = require("fs-extra");

let browser : Browser;
let context : BrowserContext;
let videoPath;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false})
})

Before(async function ({pickle}) {
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos/",
        }
    })

    const page = await context.newPage()
    myPage.page = page
})


AfterStep(async function ({pickle, result}) {
    console.log(pickle.name + " : " + result.status)
    //let videoPath: string;
    //if (result.status == STATUS_CODES.failed){
        //first run with this line show the report and show that screenshot is not storted in the folder since no name given to screenshot
        const img = await myPage.page.screenshot({path: "test-results/screenshots/"+"pickle.name"+".png", type: "png"})
        
        await this.attach(img, "image/png") //attach screenshot
       
    //}
    
})

After(async function ({pickle}) {
     videoPath = await myPage.page.video()?.path()
    const videoName = pickle.name + ".webm"
    await myPage.page.close()
    await context.close()

    await this.attach(
        fs.readFileSync(videoPath),
        'video/webm'
        );
})

AfterAll(async function () {
 await browser.close()
})
