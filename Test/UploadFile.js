const {Builder, Browser, Key, By} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://tus.io/demo');
    let element = await driver.findElement(By.id("P0-0"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(5000);
    await driver.findElement(By.xpath(`//INPUT[@id="P0-0"]`)).sendKeys('C:\\Users\\Adrian\\Downloads\\Tetsphoto.jpeg');
    await driver.sleep(5000);
    await driver.quit();
})();