import {Given, setDefaultTimeout} from "@cucumber/cucumber"
import {myPage} from "./../../fixtures/base"
import { Browser, Page, chromium } from "@playwright/test";
import { Context } from "vm";
import LoginPage from "../../pages/loginPage"

let loginPage: LoginPage
setDefaultTimeout(60 * 1000 * 2)

// Page cannot be share from login to addToCart Steps file
/* Given('User navigates to the book cart application', async function () {
    browser = await chromium.launch({
        headless:false
    })
    page = await browser.newPage()
    loginPage = new LoginPage(page)
    await page.goto("https://bookcart.azurewebsites.net/login")
  });  */

  //Create PageFixture with undefned and use it 
/*   Given('User navigates to the book cart application', async function () {
    browser = await chromium.launch({
        headless:false
    })
    page = await browser.newPage()
    myPage.page = page
    loginPage = new LoginPage(myPage.page)
    await page.goto("https://bookcart.azurewebsites.net/login")
  }); */

  Given('User navigates to the book cart application', async function () {
    loginPage = new LoginPage(myPage.page)
  });

  Given('User logs in successfully with {string} and {string}', async function (username, password) {
    await loginPage.login(username, password)
  });
