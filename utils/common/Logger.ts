import {Page, TestInfo} from '@playwright/test';

export class Logger {

    page: Page
    testInfo: TestInfo;

    constructor(page: any, testInfo: any){
       this.page = page
       this.testInfo = testInfo;
    }

    async logMessage(logMsg: string): Promise<void>{
        console.log(logMsg);
        await this.testInfo.attach("Execution Log", {
            body: logMsg,
            contentType: 'text/plain'
        });
    }

    async addScreenshot(name = 'Screenshot'): Promise<void>{
        console.log("Taking Screenshot..");
        let screenshot = await this.page.screenshot({
            fullPage: true
        });

        await this.testInfo.attach(name, {
            body: screenshot,
            contentType: 'image/png'
        });
    }


}