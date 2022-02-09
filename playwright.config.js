// playwright.config.js
// @ts-check
require('dotenv').config()
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'test/playwright',
  reporter: 'list',
  // Each test is given 30 seconds
  timeout: 60000,

  // Forbid test.only on CI
  // forbidOnly: !!process.env.CI,

  // Two retries for each test
  retries: 2,

  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 1 : undefined,

  use: {
    // Configure browser and context here
    video: 'on-first-retry',
    screenshot: 'on'
  }
}

module.exports = config
