import {Builder, By, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity13() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
 
    try {
        await driver.get("https://training-support.net/selenium/tables");
 
        console.log(await driver.getTitle());
 
        // Get the columns
        const cols: WebElement[] = await driver.findElements(By.xpath("//table[contains(@class, \"striped\")]/tbody/tr[1]/td"));
 
        // Get the rows
        const rows: WebElement[] = await driver.findElements(By.xpath("//table[contains(@class, \"striped\")]/tbody/tr"));
 
        // Print the dimensions of the table
        console.log(`The table has ${rows.length} rows and ${cols.length} columns.`);
 
        // Get the 3rd row and print it
        const thirdRow: WebElement[] = await driver.findElements(By.xpath("//table[contains(@class, \"striped\")]/tbody/tr[3]"));
        thirdRow.forEach(async (cell) => console.log(await cell.getText()));
 
        // Print the value at the 2nd row 2nd column
        const cellValue2_2: WebElement = await driver.findElement(By.xpath("//table[contains(@class, \"striped\")]/tbody/tr[2]/td[2]"));
        console.log(`The value at (2,2) is ${await cellValue2_2.getText()}`);
 
    } finally {
        await driver.close();
    }
 
})();