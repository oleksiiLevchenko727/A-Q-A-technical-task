import { Page } from "@playwright/test";
class UnavailableRoomComponent {
   constructor(private page: Page) {
     this.page=page;
}
checkIn = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check In$/ })
 .getByRole('textbox')
 .fill('18/07/2025');
};

checkOut = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check Out$/ })
 .getByRole('textbox')
 .fill('20/07/2025');
};

checkAvailability =  () => {
return this.page
 .getByRole('button', { name: 'Check Availability' })
 .click();
}

bookNow =  () => {
return this.page
 .locator('div')
 .filter({ hasText: /^£150 per nightBook now$/ })
 .getByRole('link')
 .click();
}

reserveNow =  () => {
return this.page
 .getByRole('button', { name: 'Reserve Now' })
 .click();
}

firstName =  () => {
return this.page
 .getByRole('textbox', { name: 'Firstname' })
 .fill('Oleksii');
}

lastName =  () => {
return this.page
 .getByRole('textbox', { name: 'Lastname' })
 .fill('Levchenko');
}

email =  () => {
return this.page
 .getByRole('textbox', { name: 'Email' })
 .fill('o.levchenko@neolit.ua');
}

mobilePhone =  () => {
return this.page
 .getByRole('textbox', { name: 'Phone' })
 .fill('380961686620');
}

returnHome =  () => {
return this.page
 .getByRole('link', { name: 'Return home' })
 .click();
}

checkInAnotherDate = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check In$/ })
 .getByRole('textbox')
 .fill('21/07/2025');
};

checkOutAnotherDate = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check Out$/ })
 .getByRole('textbox')
 .fill('22/07/2025');
};

expectUnavailableDate = () => {
return this.page
.getByText('Unavailable')
.first()
}

}
export {UnavailableRoomComponent};