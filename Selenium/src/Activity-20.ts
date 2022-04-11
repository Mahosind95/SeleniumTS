import {Builder, By, until, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity22() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
 
    try {
        await driver.get("https://training-support.net/selenium/popups");
 
        console.log(await driver.getTitle());
 
        // Find button
        const button: WebElement = await driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/div[2]/button"));
 
        // Get the tooltip text
        console.log(await button.getAttribute("data-tooltip"));
 
        // Click the button
        await button.click();
 
        // Wait for the popup
        await driver.wait(until.elementLocated(By.id("signInModal")));
 
        // Type the credentials
        await driver.findElement(By.id("username")).sendKeys("admin");
        await driver.findElement(By.id("password")).sendKeys("password");
 
        // Click the login button
        await driver.findElement(By.xpath("/html/body/div[4]/div/div[2]/div/div/button")).click();
 
        // Print the login message
        console.log(await driver.findElement(By.id("action-confirmation")).getText());
 
    } finally {
        await driver.quit();
    }
 
})();