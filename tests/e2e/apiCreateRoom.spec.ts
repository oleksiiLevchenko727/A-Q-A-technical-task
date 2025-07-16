import { test, expect, APIResponse } from "@playwright/test";


test.describe('Административные операции с комнатами', () => {

    test.beforeAll(async ({ request }) => {
     test("Login with admin's credentials", async ({ request }) => {
   //lets-check that POST works
     const response: APIResponse = await request.post(`https://automationintesting.online/api/auth/login/`, {
        data: {
          "username":"admin",
          "password":"password"
        },
      });
      expect (response.ok()).toBeTruthy();
    });

   test("Create a new Room", async ({ request }) => {
   //lets-check that POST works
     const response: APIResponse = await request.post(`https://automationintesting.online/api/room`, {
        data: {
          "roomName":"111",
          "type":"Double",
          "accessible":true,
          "description":"The best room in the hotel",
          "image":"https://www.mwtestconsultancy.co.uk/img/room1.jpg",
          "roomPrice":"125","features":["WiFi","TV","Radio"]
        },
    });
    expect(response).toBeOK;
     // expect (response.ok()).toBeTruthy();
    });
    });
  });