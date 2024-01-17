import {test as myTest} from '@playwright/test'
import { Page } from "@playwright/test";

import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import AddToCartPage from "../pages/addToCartPage"

type pages ={
    registerPage : RegisterPage;
    loginPage: LoginPage;
    addToCart: AddToCartPage;
}

export const myFixtureTest = myTest.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    addToCart: async ({ page }, use) => {
        await use(new AddToCartPage(page));
    }
});

export const myFixtureTest2 = myTest.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(myPage.page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(myPage.page));
    },
    addToCart: async ({ page }, use) => {
        await use(new AddToCartPage(myPage.page));
    }
});

export const myAssert = myTest.expect;

export const myPage ={

    //@ts-ignore
    page: undefined as Page
}
