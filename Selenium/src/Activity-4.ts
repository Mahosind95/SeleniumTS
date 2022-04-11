import { WebDriver,Builder,By } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    try{
        await driver.get("https://www.training-support.net/selenium/target-practice");
        console.log(await driver.getTitle());

        console.log( await driver.findElement(By.xpath("//*[@id=\"third-header\"]")).getText());
        console.log( await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/div/div[1]/h5")).getCssValue("color"));
        console.log( await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/div/div[2]/div[2]/button[3]")).getAttribute("class"));
        console.log( await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/div/div[2]/div[3]/button[2]")).getText());

       
    } finally{
        await driver.close();
    }

})();