import { Page } from "@playwright/test";
class ValidDataComponent {
   constructor(private page: Page) {
     this.page=page;
}
checkIn = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check In$/ })
 .getByRole('textbox')
 .click();
};

switchMonth = () => {
return this.page
 .getByRole('button', { name: 'Next Month' })
 .click();
};

checkInDay = () => {
return this.page
 .getByRole('option', { name: 'Choose Tuesday, 5 August' })
 .click();
};

checkOut = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check Out$/ })
 .getByRole('textbox')
 .dblclick();
};

switchMonthAgain = () => {
return this.page
 .getByRole('button', { name: 'Next Month' })
 .click();
};

checkOutDay = () => {
return this.page
 .getByRole('option', { name: 'Choose wednesday, 6 August' })
 .click();
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

expectText =  () => {
return this.page
 .getByRole('heading', { name: 'Booking Confirmed' })
}

}
export {ValidDataComponent};