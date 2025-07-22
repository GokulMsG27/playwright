import{test} from '@playwright/test';
 
test("file Handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5501/custassertion.html");
    await page.pause();
 
    // file uploading test case
    const filepath:string = "tests/html.pdf";
    await page.setInputFiles("input[type='file']",filepath);
    await page.locator("button[type='submit']").click();
 



    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadButton')

    ]);

    const downloadFilePath = await download.path();
    console.log("Downloading File Path:",downloadFilePath)
 

 
});