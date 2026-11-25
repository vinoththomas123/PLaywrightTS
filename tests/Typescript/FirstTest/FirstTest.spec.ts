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

test.beforeAll('Before All', async (testInfo) => {
    driverFactory = new DriverFactory();
    page = await driverFactory.getPage();
    logger = new Logger(page, testInfo)
});

test.afterAll('After All', async (testInfo) => {
    await driverFactory.closePage();
});

test('Using dropdown select option ', async ({  }) => {
    test.setTimeout(60 * 1000);
    await page.goto(url, {timeout:10000});
    await page.getByRole('radio', { name: 'Male', exact: true}).check();

    let dropdown = page.getByRole('combobox', { name: 'Country' })
    await dropdown.selectOption('India');

    await dropdown.selectOption({label: 'United Kingdom'});

    await dropdown.selectOption({index: 1});
    await page.waitForTimeout(5000);

    console.log(await dropdown.getAttribute("value", {timemout: 10000}));
});

test('Using dropdown select option in loop', async ({  }) => {
    await page.goto(url);
    await page.getByRole('radio', { name: 'Male', exact: true}).check();

    let dropdown = page.getByRole('combobox', { name: 'Country' })
    let options = dropdown.locator('option')
    let count = await options.count();
    console.log("Count: "+ count);
    // await dropdown.selectOption({index: 1});
    

    // console.log(await dropdown.getAttribute("value"));
    let country = "Australia"
    for (let i=0; i<count; i++){
        let value: string|null = await options.nth(i).getAttribute("value");
        console.log("Value: "+ value)

        let innertext: string|null = await options.nth(i).innerText();      //innertext and textcontent are returning same
        console.log("innertext: "+ innertext)

        let text: string|null = await options.nth(i).textContent();
        console.log("Text Content: "+ text)


        if (country.toLowerCase() == value){
            await dropdown.selectOption({index: i});

            let actualValue = await dropdown.inputValue();
            console.log("Actual: " + actualValue);
            expect(actualValue).toBe(country.toLowerCase());
        }
    }

    await page.waitForTimeout(5000);
});

test('Adding screenshots and log messages', async () => {

    await page.goto(url, 30000);
    await expect(page).toHaveURL(url, {timeout: 10000})
    await logger.logMessage("Page is opened")
    await logger.addScreenshot("First Screenshot");
    

});

test('Using get by Role ', async ({ page }) => {
    await page.goto(url);
    await page.getByRole('radio', { name: 'Male', exact: true}).check();

    await page.getByRole('textbox', { name: 'Name'}).fill("VT");
    await page.getByRole('textbox', { name: 'Email' }).fill("vinoth.thomas123@gmail.com");
    await page.getByRole('textbox', { name: 'Phone' }).fill("9986527177");
    await page.getByRole('textbox', { name: 'Address' }).fill("Bangalore Karnataka");

    await page.getByRole('checkbox', { name: 'Sunday', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Monday', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Tuesday', exact: true }).check();

    await page.getByRole('combobox', { name: 'Country' }).selectOption('India');

    await page.getByRole('listbox', { name: 'Colors'}).selectOption('Green');
    await page.getByRole('listbox', { name: 'Colors'}).selectOption('Red');

    await page.getByRole('listbox', { name: 'Sorted List'}).selectOption('Lion');
    await page.getByRole('listbox', { name: 'Sorted List'}).selectOption('Fox');

    let target = page.getByText('Dropped!');
    let source = page.getByText ('Drag me to my target')
    await source.dragTo(target);
});

test('Unsing negative verification - Not in expect call', async ({page}) => {
    await page.goto(url);
    await expect(page).toHaveURL(url)
    let radio = page.getByRole('radio', { name: 'Male', exact: true })
    await radio.check({timeout:30000});
    await expect(radio).toBeChecked();

    let femaleRadio = page.locator('#female')
    await expect(femaleRadio).not.toBeChecked( {timeout:10000});        //Not is used to check it is unchecked
    let currentURL =  page.url();
    console.log(currentURL)
});

test('To Check and validate all checkboxes at a time', async ({page}) => {
    
    await page.goto(url);
    await expect(page).toHaveURL(url)
    let checkboxes = "//*[text()='Days:']//following::input[@class='form-check-input']";

    let chks = page.locator(checkboxes);
    let count = await chks.count();

    for (let i = 0; i< count; i++){
        let oneByOne = chks.nth(i);
        await oneByOne.check();
        await expect(oneByOne).toBeChecked();
    }

});


