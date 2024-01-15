import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //testMatch: ['tests/02_bookcart_without_pom_fixture.spec.ts'],
  testDir: './tests',
  /* Run tests in files in parallel */
 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
 // workers: process.env.CI ? 1 : undefined,
 use: {
  /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://bookcart.azurewebsites.net/',

  /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  //trace: 'on-first-retry',
  headless: false,
  //screenshot: "on",
  video: "on",
  contextOptions: { recordVideo: { dir: 'test-results/videos/' } }
},
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  reporter: [
    ["dot"], ["json",{
      outputFile: "jsonReports/jsonReport.json"
    }],["html",{
      open: "never"
    }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
