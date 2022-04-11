import {Actions, Builder, By, Key, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity15() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({ async: true});
 
    try {
        await driver.get("https://training-support.net/selenium/selects");
 
        console.log(await driver.getTitle());
 
        await action.keyDown(Key.COMMAND).perform();
        // Select the 2nd option using visible text
        await driver.findElement(By.xpath("//select[@id=\"multi-select\"]/option[text() = \"Javascript\"]")).click();
 
        // Select the 3rd option using Index
        const options: WebElement[] = await driver.findElements(By.xpath("//select[@id=\"multi-select\"]/option"));
        await options[3].click();
        await options[4].click();
        await options[5].click();
 
        // Select the 4th option using value
        await driver.findElement(By.xpath("//select[@id=\"multi-select\"]/option[@value=\"node\"]")).click();

        await driver.sleep(1000);
        await options[4].click();
        await action.keyUp(Key.COMMAND).perform();

 
    } finally {
        await driver.sleep(1000);
        await driver.close();
    }
 
})();