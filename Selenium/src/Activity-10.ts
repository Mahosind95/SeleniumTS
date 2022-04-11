import { WebDriver,Builder,By, WebElement, until } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
    
        await driver.get("https://www.training-support.net/selenium/dynamic-controls");
        const toggleCheckbox: WebElement =  driver.findElement(By.id("toggleCheckbox"));
        const dynamicCheckbox: WebElement =  driver.findElement(By.id("dynamicCheckbox"));
       
        await toggleCheckbox.click();
        driver.wait(until.elementIsNotVisible(dynamicCheckbox));
        console.log(await dynamicCheckbox.isDisplayed());
       
        await toggleCheckbox.click();
       
        driver.wait(until.elementIsVisible(dynamicCheckbox));
        console.log(await dynamicCheckbox.isDisplayed());

    
    } finally{
        await driver.close();
    }

})();