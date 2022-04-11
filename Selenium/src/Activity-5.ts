import { WebDriver,Builder,By, Actions, Key } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({async:true});
    try{
        await driver.get("https://www.training-support.net/selenium/input-events");
        console.log(await driver.getTitle());
       
        const keyPressed = await driver.findElement(By.id("keyPressed"));
       
        await action.sendKeys("S").perform();

        const pressedKeyText: string = await keyPressed.getText();
        console.log(pressedKeyText);

        await action.keyDown(Key.COMMAND).sendKeys("ac").keyUp(Key.COMMAND).perform();

    } finally{
        await driver.close();
    }

})();