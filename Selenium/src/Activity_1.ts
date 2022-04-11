import {Builder, By, WebDriver} from "selenium-webdriver";

//W
(async function hello(){

    //
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
        await driver.get("https://training-support.net");
        
        //Get titel and print it.
        console.log(await driver.getTitle());

        //Find the link and click it.

        const link = await driver.findElement(By.css("#about-link"));

        await link.click();

        //Print the title of the new page
        console.log("The new page is : " + await driver.getTitle());

    } finally{
        await driver.close();
    }
})();