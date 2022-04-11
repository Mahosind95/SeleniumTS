import {Actions, Builder, By, until, WebDriver} from "selenium-webdriver";
 
(async function Activity15() {
   
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({async:true});
    
    try {
        await driver.get("https://www.training-support.net/selenium/tab-opener");
        console.log(await driver.getTitle());

        const window: Array<string> = await driver.getAllWindowHandles();

        if((await  driver.getAllWindowHandles()).length === 1){
            await driver.findElement(By.id("launcher")).click();
        }
        
        await driver.wait(
            async () => ((await driver.getAllWindowHandles()).length === 2,1000) 
        );

        const orgiWindow: Array<string> = await driver.getAllWindowHandles();
        orgiWindow.forEach(async name => {await console.log(name);
            if(!window.includes(name)){
                console.log("changed");
                await driver.switchTo().window(name);
            }
        });

        await driver.wait(until.titleIs("Newtab"),1000);
        await driver.wait(until.elementLocated(By.id("actionButton")));

        if((await  driver.getAllWindowHandles()).length === 2){
            console.log(await driver.getTitle());
            await action.click(await driver.findElement(By.id("actionButton"))).perform();
            await driver.findElement(By.id("actionButton")).click();
        }
        
        const orgiWindow2: Array<string> = await driver.getAllWindowHandles();
        await driver.wait(
            async () => ((await driver.getAllWindowHandles()).length === 3,1000) 
        );

        orgiWindow2.forEach(async name => {await console.log(name);
            if(!orgiWindow.includes(name)){
                await driver.switchTo().window(name);
            }
        });
        await driver.wait(until.titleIs("Newtab2"),1000);
        await driver.wait(until.elementLocated(By.className("content")));


    } finally {
        // await driver.sleep(1000);
        // await driver.close();
    }
 
})();