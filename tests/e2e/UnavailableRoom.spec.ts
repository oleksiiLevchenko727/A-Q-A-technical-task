import { test, expect, Page } from '@playwright/test';
import { UnavailableRoomComponent } from '../pages/UnavailableRoomPage.ts';

let page: Page;

test.beforeAll(async ({ browser }) => {
const context = await browser.newContext();
page = await context.newPage();
await page.goto("https://automationintesting.online/");
});

test("Should fill incorrect date: '18/08/2025' in check-in field", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkIn();
});

test("Should fill incorrect date: '20/08/2025' in check-in field", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkOut();
});

test("Should click on 'Check Availability' button", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkAvailability();
});

test("Should click on 'Book now' of Double room", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.bookNow();
});

test("Should click on 'Reserve Now' button", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Fill first name: 'Oleksii' ", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.firstName();
});

test("Fill last name: 'Levchenko' ", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.lastName();
});

test("Fill Email: 'o.levchenko@neolit.ua' ", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.email();
});

test("Fill mobile phone: '380961686620' ", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.mobilePhone();
});

test("Click on 'Reserve Now' button again", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.reserveNow();
});

test("Click on 'Return home' button", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.returnHome();
});

test("Should fill correct date: '21/08/2025' in check-in field", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkInAnotherDate();
});

test("Should fill correct date: '22/08/2025' in check-in field", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkOutAnotherDate();
});

test("Should click on 'Check Availability' button again", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.checkAvailability();
});

test("Should click on 'Book now' of Double again", async ({}) => {
const CheckAndBookRoom = new UnavailableRoomComponent(page);
await CheckAndBookRoom.bookNow();
});


test("Expect to take a text: 'Unavailable' on already booked room", async ({}) => {
const {expectUnavailableDate} = new UnavailableRoomComponent(page);
await expect(expectUnavailableDate()).toHaveText('Booking Confirmed');
});




