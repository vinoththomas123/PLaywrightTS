import fs from 'fs'
import path from 'path';

export class JsonUtil {

    async getJsonFromFile(filepath: string) {
        let jsonpath = path.resolve(__dirname, filepath);
        let jsondata = await fs.promises.readFile(jsonpath, 'utf8');
        let parsedJsonData = JSON.parse(jsondata);
        return parsedJsonData
    }   
}
