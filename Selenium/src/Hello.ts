import {Builder, WebDriver} from "selenium-webdriver";

//W
(async function hello(){

    //
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://training-support.net");
    console.log(driver.getTitle());

    await driver.close();
})();