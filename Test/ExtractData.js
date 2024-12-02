const {Builder, Browser, Key, By} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.tokopedia.com/');
    const tab1 = await driver.getWindowHandle();
    await driver.findElement(By.xpath(`//input[@data-unify="Search"]`)).sendKeys('kerudung', Key.RETURN);
    await driver.sleep(3000);
    let namaBarang = await driver.findElement(By.xpath('(//span[@class="_0T8-iGxMpV6NEsYEhwkqEg=="])[1]')).getText();
    console.log(namaBarang);
    await driver.quit();
})();