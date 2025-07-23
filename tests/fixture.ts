import {test as base} from'@playwright/test'
 
type MyFixture ={
    helloworld:any
}
 
export const test = base.extend<MyFixture>({
    helloworld:async ({},use:any)=>{
        console.log("Where is my tea");
        await use();
   
    }
})