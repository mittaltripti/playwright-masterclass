import {  When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {myAssert, myPage} from "../../fixtures/base"


setDefaultTimeout(60 * 1000 * 2)

When('user search for a {string}', async function (bookName) {
   await myPage.page.getByPlaceholder("Search books or authors").fill(bookName);
    const ele = myPage.page.locator(".mat-option-text");
        await ele.waitFor({
            state: "visible"
        });
        await ele.click();
        await myAssert(myPage.page.locator( "div.card-title a strong")).toHaveText(bookName, { ignoreCase: true });
  });

  When('user add the {string} to the cart', async function (bookName) {
        await myPage.page.click("button.mat-raised-button");
        const toast = myPage.page.locator("//simple-snack-bar/span");
        await myAssert(toast).toBeVisible();
        await myAssert(toast).toHaveText("One Item added to cart");
        //await myAssert(myPage.page.locator("#mat-badge-content-0")).toHaveText("1")
  });