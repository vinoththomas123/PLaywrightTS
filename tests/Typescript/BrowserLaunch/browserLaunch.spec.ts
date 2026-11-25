import {test, chromium, Browser, BrowserContext, Page} from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeAll("Browser setup", async ()=>{
    browser = await chromium.launch({
        args:['--start-maximized'],
        headless: true
    });

    context = await browser.newContext({
        viewport: null,
        deviceScaleFactor: undefined
    });
    page = await context.newPage();

});

test("Launch and Test", async ()=>{
    await page.goto("https://www.google.co.in")  
    await page.locator("textarea[name='q']").fill("hi vinoth");
});


