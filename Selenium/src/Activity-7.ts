import { WebDriver,Builder,By, Actions, WebElement, until } from "selenium-webdriver";

(async function login(){
    
    const driver: WebDriver = await new Builder().forBrowser("firefox").build();
    const action: Actions = driver.actions({ async: true});
    try{
    
        await driver.get("https://www.training-support.net/selenium/drag-drop");
        const ball: WebElement = driver.findElement(By.id("draggable"));
        const droppable: WebElement = driver.findElement(By.id("droppable"));
        const dropzone2: WebElement = driver.findElement(By.id("dropzone2"));
        await action.dragAndDrop(ball, droppable).perform;

        driver.wait(until.elementTextIs(await droppable.findElement(By.css("p")), "Dropped!"));
        if (await droppable.findElement(By.css("p")).getText() == "Dropped!") {
            console.log("Dropzone 1 was activated!");
        }
 
        // Drag the ball into D2
        await action.dragAndDrop(ball, dropzone2).perform();
 
        // Verify that dropzone1 was activated
        driver.wait(until.elementTextIs(await dropzone2.findElement(By.css("p")), "Dropped!"));
        if (await dropzone2.findElement(By.css("p")).getText() == "Dropped!") {
            console.log("Dropzone 2 was activated!");
        }
    
    } finally{
        await driver.close();
    }

})();