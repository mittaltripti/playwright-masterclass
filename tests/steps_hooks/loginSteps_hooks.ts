import {Given, setDefaultTimeout} from "@cucumber/cucumber"
import {myPage, myAssert} from "../../fixtures/base"
import LoginPage from "../../pages/loginPage"

let loginPage: LoginPage

setDefaultTimeout(60 * 1000 * 2)

  Given('User navigates to the book cart application', async function () {
    loginPage = new LoginPage(myPage.page)
    await myPage.page.goto("https://bookcart.azurewebsites.net/login")
  });

  Given('User logs in successfully with {string} and {string}', async function (username, password) {
    await loginPage.login(username, password)
   /*  await myPage.page.getByLabel('Username *').fill(username);
    await myPage.page.getByLabel('Password *').fill(password);
    await myPage.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    await myAssert(myPage.page.locator("mat-list-item[class='mat-list-item mat-focus-indicator active-category'] a")).toHaveText("All Categories")
    await myAssert(myPage.page.locator("button[class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base ng-star-inserted'] span[class='mat-button-wrapper']")).toContainText(username) */
  });
