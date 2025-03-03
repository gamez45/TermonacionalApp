import fs from 'fs';

async function Pf() {
    const data = await fs.promises.readFile('/Users/Termonacional/OneDrive/Escritorio/TermonacionalApp/txt/conscomerProducts.txt', 'utf-8');
    return data;
};

async function Rf(dat) {
    const d0 = dat.replace(/}{/g, '},{');
    return d0;
};

async function main() {
    const dat = await Pf();
    const result = await Rf(dat);
    const formattedResult = '[' + result + ']';
    await fs.promises.writeFile('/Users/Termonacional/OneDrive/Escritorio/TermonacionalApp/txt/conscomerProducts.json', formattedResult, 'utf-8');
    console.log('File has been written successfully.');
};

main();
