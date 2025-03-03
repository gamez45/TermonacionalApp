import fs from 'fs';
import puppeteer from 'puppeteer';

async function eF() {
  const arrayL = [];

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();
  await page.goto('https://ventalanamineral.com/collections/all');

  const pagination = await page.evaluate(() => {
    const pages = document.querySelector("#ProductGridContainer > div > div.pagination-wrapper > nav > ul > li:nth-child(5)").innerText;
    return pages;
  });

  for (let i = 1; i < parseFloat(pagination) + 1; i++) {
    await page.goto(`https://ventalanamineral.com/collections/all?page=${i}`);
    const result = await page.evaluate(() => {
      const products = document.querySelectorAll("#product-grid > li");
      const data = [...products].map((product) => {
        const link = product.querySelector('h3 > a').href;
        return link;
      });
      return data;
    });

    arrayL.push(result);
  }

  await browser.close();
  return arrayL;
}

async function Owp(aE) {
  const arrayP = [];

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });
  const page = await browser.newPage();

  for (const l of aE.flat()) { // Asegurándome de que "aE" está aplanado
    try {
      await page.goto(l);
      const result = await page.evaluate(() => {
        const titulo = document.querySelector('h1').outerText;
        const precio = document.querySelector('div.price__regular > span.price-item.price-item--regular > span').outerText;
        const descripcion = document.querySelector('div.product__description.rte.quick-add-hidden').outerText;
        const img = document.querySelector('div.product__media.media.media--transparent > img').src;
        return { titulo, precio, descripcion, img };
      });

      arrayP.push(result);
    } catch (e1) {
      try {
        await page.goto(l);
        const result = await page.evaluate(() => {
          const titulo = document.querySelector('h1').outerText;
          const precio = document.querySelector('div.price__regular > span.price-item.price-item--regular > span').outerText;
          const descripcion = document.querySelector('div.product__description.rte.quick-add-hidden').outerText;
          const img = '';
          return { titulo, precio, descripcion, img };
        });
        arrayP.push(result);
      } catch (e2) {
        try {
          await page.goto(l);
          const result = await page.evaluate(() => {
            const titulo = document.querySelector('h1').outerText;
            const precio = document.querySelector('div.price__regular > span.price-item.price-item--regular > span').outerText;
            const descripcion = '';
            const img = '';
            return { titulo, precio, descripcion, img };
          });
          arrayP.push(result);
        } catch (e3) {
          console.error(`Failed to process link: ${l}`, e3);
        }
      }
    }
  }

  await browser.close();
  return arrayP;
}

async function Pf(aP) {
  const data = aP;
  return JSON.stringify(data); // Convertir a cadena JSON
}

async function Rf(dat) {
  const d0 = dat.replace(/}{/g, '},{');
  return d0;
}

async function main() {
  const aE = await eF();
  const aP = await Owp(aE);
  const dat = await Pf(aP);
  const result = await Rf(dat);
  const formattedResult = '[' + result + ']';
  await fs.promises.writeFile('/Users/Termonacional/OneDrive/Escritorio/TermonacionalApp/txt/conscomerProducts.json', formattedResult, 'utf-8');
  console.log('Productos actualizados');
}

main();
