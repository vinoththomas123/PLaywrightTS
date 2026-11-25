import { test } from '@playwright/test';

let url = "https://reqres.in";
let config = {
    headers: {
        "Content-Type": "application/json"
    }
}

test('Get Request', async ({ request }) => {
    let res = await request.get(url + "/api/users/2", { ...config, timeout: 10000 });
    let status = await res.status();
    console.log(status);
    console.log(JSON.stringify(res.json(), null, 2));
});

test('post Request', async ({ request }) => {
    let payload = {
        "name": "morpheus",
        "job": "leader"
    }
    let res = await request.post(url + "/api/users", { ...config, timeout: 10000, data: payload });
    let json = await res.json();
    console.log(JSON.stringify(json, null, 2));
    console.log('Name:', json.name);
    console.log('Url:', json.support.url);
});