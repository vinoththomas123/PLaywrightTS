import {test, expect} from '@playwright/test';

test.skip('Tab Handle', async ({page})=>{
    await page.goto('');

    const childPromise = page.waitForEvent('popup');

    await page.getByRole('button', {name: 'New Tab'}).click();
    const childWindow = await childPromise;

    await childWindow.getByRole('link', {name: 'Online Training'}).click(); // happens on the child page or second tab

    //doing activity in parent page
    await page.getByPlaceholder('Enter Name').fill("Parent window");

    await page.waitForTimeout(5000);

    await childWindow.close();
});

test('Window Handle', async ({page})=>{
    await page.goto('');

    const childPromise = page.waitForEvent('popup');

    await page.getByRole('button', {name: 'Popup Windows'}).click();
    const childWindow = await childPromise;

    // happens on the child page or second tab
    await page.pause();
    let headerText = childWindow.getByText('Automate any browser, from any language.');
    await expect (headerText).toBeVisible({timeout:30000});

    let button = childWindow.getByRole("tab", {name: 'Python'});
    await button.click();

    await page.waitForTimeout(5000);

    // doing activity in parent page
    await page.getByPlaceholder('Enter Name').fill("Parent window");

    await page.waitForTimeout(5000);

    await childWindow.close();
});