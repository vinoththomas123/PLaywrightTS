import {test, expect} from '@playwright/test';

test('Login Setup Validation', async ({page})=>{
    await page.goto('/p/playwrightpractice.html');
    await expect(page.getByRole('heading', {name: 'PlaywrightPractice'})).toBeVisible();
});