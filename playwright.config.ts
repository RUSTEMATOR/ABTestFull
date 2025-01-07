import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 3,
  timeout: 120000,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
              ['list'],
                ['playwright-qase-reporter', {
                  debug: true,
                  mode: 'testops',
                  logging: true,
                  testops: {
                    api: {
                      token: '2b3e65ab1ee17f1440a13c94b9d1da5429f590fdbcc8d080ddc41268ae50305b',
                    },

                    project: 'AUTOMATION',
                    uploadAttachments: true,
                    run: {
                      complete: false,
                      title: 'A/B Split regression', 
                      id: '198'
                    }

                  }
                }
              ]
         ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    
    actionTimeout: 3000,
    
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    // video: 'on',
    // screenshot: 'on',
    
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Registration',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/registrationTest/**/*.spec.ts'
    },

    {
      name: 'Registration-stage',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/registrationStageTest/**/*.stage.ts'
    },

    {
      name: 'prod',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/**/*.spec.ts'
    },

    {
      name: 'stage',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/**/*.stage.ts'
    },

    {
      name: 'ndb-prod',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/**/NDB/*.spec.ts'
    },

    {
      name: 'ndb-prod-negative',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/NegativeProd/**/NDB/*.spec.ts'
    },

    {
      name: 'ndb-stage',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/**/NDB/*.stage.ts'
    },

    {
      name: 'ndb-stage-negative',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/NegativeStage/**/NDB/*.stage.ts'
    },

    {
      name: 'prod-au-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/australiaTest/Welcome/*.spec.ts'
    },

    {
      name: 'prod-au-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/australiaTest/NDB/*.spec.ts'
    },

    {
      name: 'prod-ca-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/canadaTest/Welcome/*.spec.ts'
    },

    {
      name: 'prod-ca-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/canadaTest/NDB/*.spec.ts'
    },

    {
      name: 'prod-de-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/germanyTest/Welcome/*.spec.ts'
    },

    {
      name: 'prod-de-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/germanyTest/NDB/*.spec.ts'
    },

    {
      name: 'prod-nz-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/newZealand/Welcome/*.spec.ts'
    },

    {
      name: 'prod-nz-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/newZealand/NDB/*.spec.ts'
    },

    {
      name: 'prod-ch-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/switzerlandTest/Welcome/*.spec.ts'
    },
    
    {
      name: 'prod-ch-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/switzerlandTest/NDB/*.spec.ts'
    },
    
    {
      name: 'prod-no-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/norwayTest/Welcome/*.spec.ts'
    },
    
    {
      name: 'prod-no-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/norwayTest/NDB/*.spec.ts'
    },
    
    {
      name: 'prod-ie-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/irelandTest/Welcome/*.spec.ts'
    },
    
    {
      name: 'prod-ie-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/irelandTest/NDB/*.spec.ts'
    },
    
    {
      name: 'prod-at-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/austriaTest/Welcome/*.spec.ts'
    },
    
    {
      name: 'prod-at-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Prod/austriaTest/NDB/*.spec.ts'
    },

    //STAGE POSITIVE------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
      name: 'stage-au-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/australiaStageTest/Welcome/*.stage.ts'
    },

    {
      name: 'stage-au-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/australiaStageTest/NDB/*.stage.ts'
    },

    {
      name: 'stage-ca-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/canadaStageTest/Welcome/*.stage.ts'
    },

    {
      name: 'stage-ca-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/canadaStageTest/NDB/*.stage.ts'
    },

    {
      name: 'stage-de-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/germanyStageTest/Welcome/*.stage.ts'
    },

    {
      name: 'stage-de-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/germanyStageTest/NDB/*.stage.ts'
    },

    {
      name: 'stage-nz-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/newZealandStageTest/Welcome/*.stage.ts'
    },

    {
      name: 'stage-nz-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/newZealandStageTest/NDB/*.stage.ts'
    },

    {
      name: 'stage-ch-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/switzerlandStageTest/Welcome/*.stage.ts'
    },
    
    {
      name: 'stage-ch-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/switzerlandStageTest/NDB/*.stage.ts'
    },
    
    {
      name: 'stage-no-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/norwayStageTest/Welcome/*.stage.ts'
    },
    
    {
      name: 'stage-no-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/norwayStageTest/NDB/*.stage.ts'
    },
    
    {
      name: 'stage-ie-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/irelandStageTest/Welcome/*.stage.ts'
    },
    
    {
      name: 'stage-ie-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/irelandStageTest/NDB/*.stage.ts'
    },
    
    {
      name: 'stage-at-welcome',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/austriaStageTest/Welcome/*.stage.ts'
    },
    
    {
      name: 'stage-at-ndb',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/tests/Stage/austriaStageTest/NDB/*.stage.ts'
    },


    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
