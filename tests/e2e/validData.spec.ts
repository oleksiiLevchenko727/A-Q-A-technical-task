import { test, expect, Page } from '@playwright/test';
import { ValidDataComponent } from '../pages/ValidDataPage.ts';

let page: Page;

test.beforeAll(async ({ browser }) => {
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://automationintesting.online/");
});

test("Should click on Check In button", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.checkIn();
});

test("Should switch Month", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.switchMonth();
});

test("Should select Check-In day", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.checkInDay();
});

test("Should click on Check Out button", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.checkOut();
});

test("Should switch Month again", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.switchMonthAgain();
});

test("Should select Check-Out day", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.checkOutDay();
});

test("Should click on 'Check Availability' button", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.checkAvailability();
});

test("Should click on 'Book now' of Double room", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.bookNow();
});

test("Should click on 'Reserve Now' button", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Fill first name: 'Oleksii' ", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.firstName();
});

test("Fill last name: 'Levchenko' ", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.lastName();
});

test("Fill Email: 'o.levchenko@neolit.ua' ", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.email();
});

test("Fill mobile phone: '380961686620' ", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.mobilePhone();
});

test("Click on 'Reserve Now' button again", async ({}) => {
const CheckAndBookRoom = new ValidDataComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Expect for taking a text: 'Booking Confirmed' ", async ({}) => {
const {expectText} = new ValidDataComponent(page);
await expect(expectText()).toHaveText('Booking Confirmed');
});




