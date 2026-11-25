import { test, expect } from '@playwright/test'
import dotenv from 'dotenv';
import {DriverFactory} from '../../../utils/common/DriverFactory'
import {Logger} from '../../../utils/common/Logger'
dotenv.config();
const url = process.env.APP_URL;

if (!url) {
  throw new Error('APP_URL is not defined in the .env file');
}

let page: any;
let driverFactory: DriverFactory;
let logger: Logger;

test.beforeAll('Before All', async () => {
    driverFactory = new DriverFactory();
    page = await driverFactory.getPage();
    
});

test('Adding screenshots and log messages', async ({}, testInfo) => {
    logger = new Logger(page, testInfo);
    await page.goto(url);
    await expect(page).toHaveURL(url)
    await logger.logMessage("Page is opened: "+ url);
    await logger.addScreenshot("First Screenshot");

    await logger.addScreenshot("Second Screenshot");

    if (testInfo.status != testInfo.expectedStatus){
        await logger.addScreenshot("Third Screenshot");
    }
});