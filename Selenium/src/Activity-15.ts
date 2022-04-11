import {Builder, By, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity15() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
 
    try {
        await driver.get("https://training-support.net/selenium/selects");
 
        console.log(await driver.getTitle());
 
        // Select the 2nd option using visible text
        await driver.findElement(By.xpath("//select[@id=\"single-select\"]/option[text() = \"Option 2\"]")).click();
 
        // Select the 3rd option using Index
        const options: WebElement[] = await driver.findElements(By.xpath("//select[@id=\"single-select\"]/option"));
        await options[3].click();
 
        // Select the 4th option using value
        await driver.findElement(By.xpath("//select[@id=\"single-select\"]/option[@value=\"4\"]")).click();
 
        // Print all the options out to the console
        options.forEach(async (option) => console.log(await option.getText()));
 
    } finally {
        await driver.sleep(1000);
        await driver.close();
    }
 
})();