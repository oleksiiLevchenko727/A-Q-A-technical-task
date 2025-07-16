import { test, expect, APIResponse } from "@playwright/test";

test("create product", async ({ request }) => {
   //lets-check that POST works
     const response: APIResponse = await request.get(`https://automationintesting.online/admin`, {
        data: {
          "username":"admin",
          "password":"password"
        },
        //   failonStatusCode: true,
});
// expect (response.ok()).toBeTruthy();

// console.log(await response.body());
// console.log(await response.json());
// console.log(response.headers());
// console.log(response.headersArray());
// console.log(response.status());
// console.log(response.statusText());
// console.log(await response.text());
// console.log(response.url());
// await response.dispose();
});
