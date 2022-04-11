import {Builder, By, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity15() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try {
        await driver.get("https://www.training-support.net/selenium/dynamic-attributes");
        console.log(await driver.getTitle());
 
        // Select the 2nd option using visible text
        const username: WebElement = await driver.findElement(By.xpath("//input[starts-with(@class , \"username\")]"));
        const password: WebElement = await driver.findElement(By.xpath("//input[starts-with(@class , \"password\")]"));

        username.sendKeys("admin");
        password.sendKeys("password");

        await driver.findElement(By.xpath("//button[text() = \"Log in\"]")).click();

        console.log(await driver.findElement(By.id("action-confirmation")).getText());
        
    } finally {
        await driver.sleep(1000);
        await driver.close();
    }
 
})();