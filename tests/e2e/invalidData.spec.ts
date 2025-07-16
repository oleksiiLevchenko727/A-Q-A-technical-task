import { test, expect, Page } from '@playwright/test';
import { InvalidDataComponent } from '../pages/invalidData.page.ts';

let page: Page;

test.beforeAll(async ({ browser }) => {
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://automationintesting.online/");
});

test("Should fill incorrect date: '01/01/2002' in check-in field", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.checkIn();
});

test("Should fill incorrect date: '31/12/2002' in check-in field", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.checkOut();
});

test("Should click on 'Check Availability' button", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.checkAvailability();
});

test("Should click on 'Book now' of Double room", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.bookNow();
});

test("Should click on 'Reserve Now' button", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Fill first name: 'Oleksii' ", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.firstName();
});

test("Fill last name: 'Levchenko' ", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.lastName();
});

test("Fill Email: 'o.levchenko@neolit.ua' ", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.email();
});

test("Fill mobile phone: '380961686620' ", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.mobilePhone();
});

test("Click on 'Reserve Now' button again", async ({}) => {
const CheckAndBookRoom = new InvalidDataComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Expect for taking a text: 'Booking Confirmed' ", async ({}) => {
const {expectText} = new InvalidDataComponent(page);
await expect(expectText()).toHaveText('Booking Confirmed');
});




