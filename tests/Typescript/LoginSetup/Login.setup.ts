import {test as setup, expect} from '@playwright/test';
import dotenv from 'dotenv';
import { Logger } from '../../../utils/common/Logger';

dotenv.config();

let url = process.env.APP_URL;
if (!url)
    throw new Error ("URL is not defined or not exists in .env");

let authFile = 'playwright/.auth/user.json';

setup ('Login setup', async ({page})=>{
    await setup.setTimeout(60000);

    console.log("Login setup started");
    await page.goto(url, {timeout: 30000});

    let name = page.getByPlaceholder("Enter Name");
    let mail = page.getByPlaceholder("Enter EMail");
    let phone = page.getByPlaceholder("Enter Phone");
    let submit = page.locator("//*[@class='submit-btn']");

    // let element = page.getByText('text', {exact: true});

    await name.fill("John", {timeout: 5000});
    await mail.fill("John.Steve@gmail.com");
    await phone.fill("9998887770");
    await submit.click();

    await expect (page).toHaveURL(url, {timeout: 5000});

    await page.context().storageState({
        path: authFile
    });
    console.log("Login setup completed");
});