import { WebDriver,Builder,By, Actions, WebElement, until } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({ async: true});
    try{
        await driver.get("https://www.training-support.net/selenium/input-events");
        console.log(await driver.getTitle());
        
        //Find the cube
        const acube: WebElement = await driver.findElement(By.id("wrapD3Cube"));

        await action.click(acube).perform();
        await driver.wait(until.elementLocated(By.className("active")));
        let cuVal = await driver.findElement(By.className("active"));
        console.log(`On left click : ${await cuVal.getText()}`);

        await action.doubleClick(acube).perform();
        cuVal = await driver.findElement(By.className("active"));
        console.log(`On double click : ${await cuVal.getText()}`);

        await action.contextClick(acube).perform();
        cuVal = await driver.findElement(By.className("active"));
        console.log(`On right click : ${await cuVal.getText()}`);

    } finally{
        await driver.close();
    }

})();