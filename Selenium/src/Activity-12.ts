import { WebDriver,Builder,By, WebElement, until } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
    
        await driver.get("https://www.training-support.net/selenium/dynamic-controls");
        const dynamicText: WebElement =  driver.findElement(By.id("input-text"));
        const toggleInput: WebElement =  driver.findElement(By.id("toggleInput"));
       
        console.log(await dynamicText.isEnabled());
        if(!(await dynamicText.isEnabled())){
            console.log("Enabling input box");
            await toggleInput.click();
            driver.wait(until.elementIsEnabled(dynamicText));
        }
       
        console.log(await dynamicText.isEnabled());

    
    } finally{
        await driver.close();
    }

})();