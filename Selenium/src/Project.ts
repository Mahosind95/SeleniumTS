import {Actions, Builder, By, until, WebDriver} from "selenium-webdriver";
 
(async function Project() {
   
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({async:true});
    
    try {
        await driver.get("https://alchemy.hguy.co/crm/ ");
        if(await driver.getTitle() === "SuiteCRM"){
            console.log("Page title is Correct !!! : "  + await driver.getTitle() );
        }else{
            console.log("Page title "+ await driver.getTitle() + " is InCorrect FIX IT !!!");
        }

    } finally {
        await driver.sleep(1000);
        await driver.close();
    }
 
})();