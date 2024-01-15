import { test, expect, chromium } from '@playwright/test';

//Step1: Record Register and Login Scripts
//Step2: Fix the scripts, elements
//Step3: TestMatch and TestDir
//Step4: Add test.slow()
//step5: Add await page.waitForTimeout(2000)

test('Register User without POM or Fixture', async () => {

  test.slow()
  const browser = await chromium.launch({
    headless: false
  })
  const context = await browser.newContext()
  const page = await context.newPage()


  await page.goto('https://bookcart.azurewebsites.net/register');
  await page.getByLabel('First name *').fill('Test');
  await page.getByLabel('Last Name *').fill('User');
  await page.getByLabel('User Name *').fill('test-user13');
  await page.getByLabel('Password *', { exact: true }).fill('Test@123');
  await page.getByLabel('Confirm Password *').fill('Test@123');
  await page.locator("label[for='mat-radio-3-input'] span[class='mat-radio-outer-circle']").click(); //select female
  await page.waitForTimeout(2000)
  await page.locator("button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']").click();
  await page.waitForTimeout(2000)
  await expect(page.url()).toEqual("https://bookcart.azurewebsites.net/login")
});

test('Login with Registered User without POM or Fixture', async () => {
  test.slow()
  const browser = await chromium.launch(
    {
      headless: false
    }
  )
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://bookcart.azurewebsites.net/login")

  await page.getByLabel('Username *').fill('test-user1');
  await page.getByLabel('Password *').fill('Test@123');
  await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("mat-list-item[class='mat-list-item mat-focus-indicator active-category'] a")).toHaveText("All Categories")
  await page.waitForTimeout(2000)
});