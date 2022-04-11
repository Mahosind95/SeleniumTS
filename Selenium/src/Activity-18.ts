import {Builder, By, until, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity15() {
   
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    
    try {
        await driver.get("https://www.training-support.net/selenium/javascript-alerts");
        console.log(await driver.getTitle());
 
        // Select the 2nd option using visible text
        const alertCon: WebElement = await driver.findElement(By.id("confirm"));
        await alertCon.click();
        await driver.wait(until.alertIsPresent());

        const alert = await driver.switchTo().alert();
        console.log(await alert.getText());
        
        await driver.sleep(2000);
        alert.dismiss();


    } finally {
        await driver.sleep(1000);
        await driver.close();
    }
 
})();