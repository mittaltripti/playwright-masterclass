import { test, expect, chromium } from '@playwright/test';


test('Browser launching with SAME Page Context', async () => {
    test.slow()
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('test.user1@xyz.com');
    await page.getByPlaceholder('Password').fill('12345678');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000)

   /*  await page.goto("https://bookcart.azurewebsites.net/login")
    await page.getByLabel('Username *').fill('test-user1');
    await page.getByLabel('Password *').fill('Test@123');
    await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("mat-list-item[class='mat-list-item mat-focus-indicator active-category'] a")).toHaveText("All Categories")
    await page.waitForTimeout(2000) */

    const page1 = await context.newPage();
    await page1.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
   /* await page1.goto('https://bookcart.azurewebsites.net/login');
    await page1.waitForTimeout(2000) */
    await expect(page1.locator(".page-title.h3")).toHaveText("Register Account")  
    //await expect(page1.locator("button.ng-star-inserted")).toHaveText("Login")
    await page1.waitForTimeout(2000)

    await page.close()
    await page1.close()

});


test('Browser launching with NEW Page Context', async () => {
    test.slow()
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('test.user1@xyz.com');
    await page.getByPlaceholder('Password').fill('12345678');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(500)

/*     await page.goto("https://bookcart.azurewebsites.net/login")
    await page.getByLabel('Username *').fill('test-user1');
    await page.getByLabel('Password *').fill('Test@123');
    await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("mat-list-item[class='mat-list-item mat-focus-indicator active-category'] a")).toHaveText("All Categories")
    await page.waitForTimeout(2000) */

    const newContext = await browser.newContext()
    const newPage = await newContext.newPage();
    await newPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await newPage.waitForTimeout(500)
    await expect(newPage.locator(".page-title.h3")).toHaveText("Register Account")
    await newPage.waitForTimeout(500)
    /* await page.goto("https://bookcart.azurewebsites.net/login")
    await newPage.waitForTimeout(2000)
    await expect(newPage.locator("button.ng-star-inserted")).toHaveText("Login")
    await newPage.waitForTimeout(2000) */

    await page.close()
    await newPage.close()

});