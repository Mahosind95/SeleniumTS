import {Builder, By, until, WebDriver} from "selenium-webdriver";
 
(async function Activity8() {
   
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
 
    try {
        // Open the page
        await driver.get("https://www.training-support.net/selenium/ajax");
 
        // Get the title and print it
        console.log(await driver.getTitle());
 
        // Click the button
        await driver.findElement(By.className("violet")).click();
 
        // Wait for the text to load
        await driver.wait(until.elementTextContains(await driver.findElement(By.id("ajax-content")), "HELLO!"));
 
        // Print the text
        console.log(await driver.findElement(By.id("ajax-content")).getText());
 
        // Wait for the late text
        await driver.wait(until.elementTextContains(await driver.findElement(By.id("ajax-content")), "I'm late"));
 
        // Print the text
        console.log(await driver.findElement(By.id("ajax-content")).getText());
 
 
    } finally {
        await driver.close();
    }
 
})();