import {Builder, By, WebDriver, WebElement} from "selenium-webdriver";
 
(async function Activity13() {
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
 
    try {
        await driver.get("https://training-support.net/selenium/tables");
 
        console.log(await driver.getTitle());
 
        // Get the columns
        const cols: WebElement[] = await driver.findElements(By.xpath("//table[contains(@class, \"sortable\")]/tbody/tr[1]/td"));
 
        // Get the rows
        const rows: WebElement[] = await driver.findElements(By.xpath("//table[contains(@class, \"sortable\")]/tbody/tr"));
 
        // Print the dimensions of the table
        console.log(`The table has ${rows.length} rows and ${cols.length} columns.`);
        // Print the value at the 2nd row 2nd column
        let cellValue2_2: WebElement = await driver.findElement(By.xpath("//table[contains(@class, \"sortable\")]/tbody/tr[2]/td[2]"));
        console.log(`The value at (2,2) is ${await cellValue2_2.getText()}`);

        // Get the 3rd row and print it
        const headerName: WebElement = await driver.findElement(By.xpath("//table[contains(@class, \"sortable\")]/thead/tr/th[1]"));
        await headerName.click();
 
        // Print the value at the 2nd row 2nd column again.
        cellValue2_2 = await driver.findElement(By.xpath("//table[contains(@class, \"sortable\")]/tbody/tr[2]/td[2]"));
        console.log(`The value at (2,2) is ${await cellValue2_2.getText()}`);

 
        // Print the values in the table footer
        const footer: WebElement[] = await driver.findElements(By.xpath("//table[@id=\"sortableTable\"]/tfoot/tr/th"));
        footer.forEach(async (cell) => console.log(await cell.getText()));

    } finally {
        await driver.close();
    }
 
})();