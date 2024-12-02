const {Builder, Browser, Key, By} = require('selenium-webdriver');
const download = require('image-downloader');


(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  let Gambar = []
    await driver.get('https://www.tokopedia.com/search?st=&q=kerudung&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=');
    await driver.sleep(5000);
    let TotalProduct = await driver.executeScript(`
      return document.evaluate(
        "//span[@class='_0T8-iGxMpV6NEsYEhwkqEg==']", 
        document, 
        null, 
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
        null
      ).snapshotLength;
    `);

    for(i=1; i<= TotalProduct; i++){
      let imageURL = await driver.findElement(By.xpath(`(//img[@class="css-1c345mg NWVIhquIvF0Jc0Qlizjluw=="])[${i}]`)).getAttribute("src");
      

      await download.image({
        url:`${imageURL}`,
        dest:`C:\\Users\\Adrian\\Documents\\testselenium\\img\\${i}.jpg`,
      })
    }
    await driver.quit();
})();