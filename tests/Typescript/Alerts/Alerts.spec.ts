import { test, expect, Page } from '@playwright/test'
import dotenv from 'dotenv';
import { DriverFactory } from '../../../utils/common/DriverFactory'
import { Logger } from '../../../utils/common/Logger'
dotenv.config();
const url = process.env.APP_URL;

if (!url) {
    throw new Error('APP_URL is not defined in the .env file');
}

let page: Page;
let driverFactory: DriverFactory;
let logger: Logger;

test.beforeAll('Before All', async (testInfo) => {
    driverFactory = new DriverFactory();
    page = await driverFactory.getPage();
    logger = new Logger(page, testInfo)
});

test('Simple Alerts 1 ', async ({ }) => {
    await page.goto(url, { timeout: 30000 });

    //We need to handle the alerts before the alerts appear on the page
    //3 types of Alerts Simple (ok), Confirmation (ok, cancel), prompt (input box and ok)
    page.on('dialog', (alert) => {
        let type = alert.type()
        let message = alert.message();
        console.log(type);
        console.log(message);
        if (type === "alert") {
            alert.accept();
        }

        if (type === "confirm") {
            alert.dismiss();
        }

        if (type === "prompt") {
            alert.accept();
        }

    });

    let simpleAlert = page.getByRole('button', { name: 'Simple Alert' });
    let confirmAlert = page.getByRole('button', { name: 'Confirmation Alert' });
    let promptAlert = page.getByRole('button', { name: 'Prompt Alert' });
    await simpleAlert.click();
    await confirmAlert.click();
    await promptAlert.click();

});