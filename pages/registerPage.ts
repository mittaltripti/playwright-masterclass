import { Page, expect } from "@playwright/test";
import { config } from "../tests/config";

export default class RegisterPage{
    constructor(public page: Page){}

    async register(fName: string, lName: string, uName: string, pass: string){
      
        await this.page.getByLabel('First name *').fill(fName);
        await this.page.getByLabel('Last Name *').fill(lName);
        await this.page.getByLabel('User Name *').fill(uName);
        await this.page.getByLabel('Password *', { exact: true }).fill(pass);
        await this.page.getByLabel('Confirm Password *').fill(pass);
        await this.page.locator("label[for='mat-radio-3-input'] span[class='mat-radio-outer-circle']").click(); //select female
        await this.page.waitForTimeout(2000)
        await this.page.locator("button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']").click();
        await this.page.waitForTimeout(2000)
        await expect(this.page.url()).toEqual("https://bookcart.azurewebsites.net/login")
    }
}