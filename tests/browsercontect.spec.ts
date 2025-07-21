 
import { test, expect,chromium, Browser, Page, Locator, BrowserContext} from '@playwright/test';
 
 
test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false ,channel: 'chrome'});
    // browsercontext-1
    const browserContext_1: BrowserContext = await browser.newContext();
    const page: Page = await browserContext_1.newPage();
    await page.goto('http://quiz.hematitecorp.com/');
    const email: Locator = await page.locator('#email');
    const password: Locator = await page.locator('#password');
    const submitButton: Locator = await page.locator('button[type="submit"]');
    await email.fill('Gokul.mu@changepond.com');
    await password.fill('Forget2701@msg');
    await submitButton.click();
    const title: string = await page.title();
    console.log("Home Page title" , title);
    await page.screenshot({ path: 'VocherCode.png' });
    expect(title).toEqual("Quiz App");
    await browserContext_1.close();
   

}) ;
 