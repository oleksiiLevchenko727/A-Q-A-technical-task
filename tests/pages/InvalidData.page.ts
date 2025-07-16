import { Page } from "@playwright/test";
class InvalidDataComponent {
   constructor(private page: Page) {
     this.page=page;
}
checkIn = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check In$/ })
 .getByRole('textbox')
 .fill('01/01/2002');
};0


checkOut = () => {
return this.page
 .locator('div')
 .filter({ hasText: /^Check Out$/ })
 .getByRole('textbox')
 .fill('31/12/2002');
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
 .fill('1./$~');
}

lastName =  () => {
return this.page
 .getByRole('textbox', { name: 'Lastname' })
 .fill('23%2/F');
}

email =  () => {
return this.page
 .getByRole('textbox', { name: 'Email' })
 .fill('``````@```.```');
}

mobilePhone =  () => {
return this.page
 .getByRole('textbox', { name: 'Phone' })
 .fill('321````fR.%$');
}

expectText =  () => {
return this.page
 .getByRole('heading', { name: 'Booking Confirmed' })
}
}
export {InvalidDataComponent};