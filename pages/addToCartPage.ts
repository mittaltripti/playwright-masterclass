import { Page,expect } from "@playwright/test";
import { config } from "../tests/config";

export default class AddToCartPage {
    constructor(public page: Page) { }

    async addBookToCart(book: string) {
        await this.searchBook(book);
        await this.page.click("button.mat-raised-button");
        const toast = this.page.locator("//simple-snack-bar/span");
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText("One Item added to cart");
        await expect(this.page.locator("#mat-badge-content-0")).toHaveText("1")
    }

     async searchBook(bookname: string) {
        await this.page.getByPlaceholder("Search books or authors")
            .fill(bookname);
        const ele = this.page.locator(".mat-option-text");
        await ele.waitFor({
            state: "visible"
        });
        await ele.click();
        await expect(this.page.locator( "div.card-title a strong")).toHaveText(bookname, { ignoreCase: true });
    }
}