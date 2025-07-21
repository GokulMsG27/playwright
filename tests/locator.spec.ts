import { test, expect,chromium, Browser, Page, Locator} from '@playwright/test';
 
 
test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://127.0.0.1:5501/locator.html');
    const fName: Locator = await page.locator('#txt1');
    const password: Locator = await page.locator('#txt2');
    await fName.fill('Gokul');
    await password.fill('Gokul@123');
    const logo:Locator = await page.locator('.logo');
    const item = await logo.isEnabled();
    console.log(item);
    const contact:Locator = await page.locator('.txtContact');
    await contact.fill("888888888");
 
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExists = await heading.isEnabled();
    console.log(headingExists);
    const  myemail:Locator = await page.locator('#txtemail');
    await myemail.fill('gokul.mu@changepond.com');
   
    const address:Locator = await page.locator('css=input#txtaddrtess');
    await address.fill('SIPCOT IT Park Chennai');
 
    const pincode:Locator = await page.locator('css=input#txtpincode');
    await pincode.fill('636117');

     //5.use xpath
    const email:Locator = await page.locator('xpath=//input[@name="myemail" and @type="email"]');
    await email.fill('admin@gmail.com');
    const term:Locator = await page.locator('xpath=//input[@name="term"]');
    await term.click();
   
});