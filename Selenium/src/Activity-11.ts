import { WebDriver,Builder,By, WebElement, until } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
    
        await driver.get("https://www.training-support.net/selenium/dynamic-controls");
        const toggleCheckbox: WebElement =  driver.findElement(By.id("toggleCheckbox"));
        const dynamicCheckbox: WebElement =  driver.findElement(By.id("dynamicCheckbox"));
       
        
        console.log(await driver.findElement(By.name("toggled")).isSelected());

        if(!(await dynamicCheckbox.isDisplayed())){
            await toggleCheckbox.click();
            driver.wait(until.elementIsNotVisible(dynamicCheckbox));
        }
        if(!(await dynamicCheckbox.isSelected())){
            await driver.findElement(By.name("toggled")).click();
        }

        console.log(await driver.findElement(By.name("toggled")).isSelected());

    
    } finally{
        await driver.close();
    }

})();