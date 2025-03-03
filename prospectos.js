/*const chee = require('cheerio');
const req = require('request');
*/
import fs from 'fs';
import { parse } from 'path/posix';

import puppeteer from 'puppeteer';


async function Owp(){

    const links = []

    const browser = await puppeteer.launch({
        headless:false,
        slowMo:100
    });
const page = await browser.newPage();
await page.goto('https://ventalanamineral.com/collections/all');

const pagination = await page.evaluate(() =>{
    const pages = document.querySelector("#ProductGridContainer > div > div.pagination-wrapper > nav > ul > li:nth-child(5)").innerText;
   
    return pages
});


for (let i = 1; i < parseFloat(pagination)+1; i++) {
    
   await page.goto('https://ventalanamineral.com/collections/all?page='+ i);
   const result = await page.evaluate(() =>{
    const products = document.querySelectorAll("#product-grid > li");
    const data = [...products].map((product)=>{
        const link= product.querySelector('h3 > a').href;  
        return {link
        }
    });

    return data
});

await fs.appendFileSync('../txt/conscomer.json', JSON.stringify(result));

}



await browser.close();

return links
  
};






async function Scr(){
await console.log(Owp())
}
Scr()
/*
fs.writeFile('conscomer.txt', ' ', function(err, r) {
  if(err) console.log('e', err);
});
const uti = require('util');
const sleep = uti.promisify(setTimeout);
var aco = [];
var ac = [];


const writeC = fs.createWriteStream('conscomer.txt');

async function stC(){

  let rstC = await pLc();
  
  
return 'ok'
  

};

async function pLog(){
  
let rLog = {'method': 'POST','url': 'https://ventalanamineral.com/collections/all'};

req(rLog, async function (e, resLo) {
  if (e) throw new Error(e);

  let r0 = await resLo.toJSON().headers;
  
  let r1 = await JSON.stringify(r0);
  let r2 = await r1.replace(/-/g, '');
  let r3 = await r2.replace('; path=/', '');
  let r4 = await JSON.parse(r3);
  let r5 = await r4.setcookie[0];
  await fs.writeFileSync('src/apk/prov/op/bd/cookieOptimo.json', JSON.stringify(r5));
  console.log('==================');
  
  console.log(resLo.data)
});

};
pLog()

async function pLc(){
    
  await pLog();
  await sleep(1000);
  const conf = require('./configO').CFo;
  const aCate = [{"1":"1"},{"1":"2"}]

  for (let k of aCate) {
    let rLc = {
    'method': 'POST',
    'url': `https://www.optimoautopartes.com.mx/inc_avki/dependencia.php?mod=cargaSublinea&opcion=${k[1]}`,
    'headers': {
      'cookie': `${conf.cookie_optimo}`
    },
};

req(rLc, async function (e, resLc) {
    if (e) throw new Error(e);
    let resLc0 = await resLc.body;
    let resLc1 = await resLc0.slice(48);
    let resLc2 = await JSON.stringify(resLc1)
    let resLc3 = await resLc2;
    let resLc4 = await resLc3.replace(/<option value=/g, '{"1":"');
    let resLc5 = await resLc4.replace(/<\/option>/g, '"},');
    let resLc6 = await resLc5.replace(/>/g, `","2":"${k[1]}","3":"`);
    writeC.write(resLc6);
    await sleep(100);
    ac.push(resLc6);
    await sleep(5000);
})};

await sleep(5000);
fs.readFile('src/apk/prov/op/bd/1lc.txt','utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var resLc7 = data.replace(/"},"/g, '"}]');
    var resLc8 = resLc7.replace(/\"{"/g, '[{"');
    var resLc9 = resLc8.replace(/]\[/g, ',');
  

    fs.writeFile('src/apk/prov/op/bd/1lc.json', resLc9, function(err, r) {
      if(err) console.log('e', err);
    });

  });
};

module.exports.stC = stC;

*/