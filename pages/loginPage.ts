import { Page,expect } from "@playwright/test";
import { config } from "../tests/config";
import exp from "constants";

export default class LoginPage {
    constructor(public page: Page) { }

    async login(username: string, password: string) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
        await expect(this.page.locator("mat-list-item[class='mat-list-item mat-focus-indicator active-category'] a")).toHaveText("All Categories")
        await expect(this.page.locator("button[class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base ng-star-inserted'] span[class='mat-button-wrapper']")).toContainText(username)
        //await this.page.waitForTimeout(2000)
    }

    async enterUsername(username: string) {
        await this.page.getByLabel('Username *').fill(username);
    }

    async enterPassword(password: string) {
        await this.page.getByLabel('Password *').fill(password);
    }

}