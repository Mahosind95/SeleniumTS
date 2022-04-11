import { WebDriver,Builder,By } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
        await driver.get("https://www.training-support.net/selenium/login-form");
        console.log(await driver.getTitle());

        const userName = await driver.findElement(By.id("username"));
        await userName.sendKeys("admin");
        const password = await driver.findElement(By.id("password"));
        await password.sendKeys("password");

        const logInBt = await driver.findElement(By.className("ui button"));
        await logInBt.click();

    } finally{
        await driver.close();
    }

})();