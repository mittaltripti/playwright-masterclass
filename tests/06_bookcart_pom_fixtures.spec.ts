import { chromium } from "@playwright/test";
import {myFixtureTest, myAssert} from "./../fixtures/base"

myFixtureTest.beforeEach(async ({page,baseURL })=>{
    await page.goto(`${baseURL}login`)
})


myFixtureTest("Register and Login with fixtures and pom and hooks", async({registerPage, loginPage, addToCart}) =>{
    //await page.goto(`${baseURL}register`)
    //await registerPage.register('test','user30','test-user30','Test@123')
    await loginPage.login('test-user18','Test@123')
    await addToCart.addBookToCart("Roomies")
})


myFixtureTest.afterAll(async({page}) => {
    await page.close()
})