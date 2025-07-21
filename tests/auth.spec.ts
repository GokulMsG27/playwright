import { test,chromium, Browser, Page, BrowserContext} from '@playwright/test';
 
test('aut test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });
    const browserContext_1: BrowserContext = await browser.newContext();
    const page: Page = await browserContext_1.newPage();

    const userId:string = "gokul.mu@changepond.com";
    const userPass:string = "Forget2701@msg";
    const authHeader:string = "Basic "+btoa(userId+":" + userPass);

    page.setExtraHTTPHeaders({Authorization:authHeader});
    await page.goto("http://quiz.hematitecorp.com/");

    // await new Promise(()=>{});

    // browserContext_1.close();;
    // browser.close();

})
  