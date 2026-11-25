import { JsonUtil } from "../../../utils/common/JsonUtil";
import {test, expect} from '@playwright/test'
import dotenv from 'dotenv'
import { Logger } from "../../../utils/common/Logger";

dotenv.config();
let url: any;

test('Read JSON File data', async ({page}, testInfo)=>{
    let logger = new Logger(page, testInfo);
    url = process.env.APP_URL
    await logger.logMessage(url);
    await page.goto(url);

    let jsonutil = new JsonUtil();

    let json = await jsonutil.getJsonFromFile("../../test-data/userData.json");

    console.log(json.data[0].user)
    await logger.addScreenshot("JSON Reader test");
    
});


test('Read local JSON File data', async ({page}, testInfo)=>{
    let logger = new Logger(page, testInfo);
    url = process.env.APP_URL
    await logger.logMessage(url);
    let jsonutil = new JsonUtil();

    let json = await jsonutil.getJsonFromFile("../../tests/Typescript/ReadJSON/readJson.json");

    console.log(json.data[0].name)
    await logger.addScreenshot("JSON Reader test");

    for (let item of json.data){
        console.log(item.name);
    }
});