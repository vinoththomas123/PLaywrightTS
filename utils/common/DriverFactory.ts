import {Page, chromium, Browser, BrowserContext} from '@playwright/test';

export class DriverFactory{
    
    page?:Page;
    context?: BrowserContext;
    browser?: Browser
    async getPage(){
        
        this.browser = await chromium.launch({
            args: ['--start-maximized']
        });

        this.context = await this.browser.newContext({
            viewport: null,
            deviceScaleFactor: undefined
        });

        this.page = await this.context.newPage();

        
        return this.page;
    }

    async closePage(){
        await this.context?.close();
        await this.browser?.close();
        await this.page?.close();
    }
}