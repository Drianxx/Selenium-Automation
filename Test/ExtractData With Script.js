const {Builder, Browser, Key, By} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.tokopedia.com/');
    await driver.findElement(By.xpath(`//input[@data-unify="Search"]`)).sendKeys('kerudung', Key.RETURN);
    await driver.sleep(5000);
    let products = [];
    let TotalProduct = await driver.executeScript(`
      return document.evaluate(
        "//span[@class='_0T8-iGxMpV6NEsYEhwkqEg==']", 
        document, 
        null, 
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
        null
      ).snapshotLength;
    `);
    console.log(TotalProduct)

    for(i=1; i<= TotalProduct; i++){
      let namaBarang = await driver.findElement(By.xpath(`(//span[@class="_0T8-iGxMpV6NEsYEhwkqEg=="])[${i}]`)).getText();
      products.push(namaBarang);
    }
    
    console.log(products);
    await driver.quit();
})();