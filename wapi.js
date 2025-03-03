async function go(){
    const ourusername = "14699pwpadmin"
    const ourpassword = "jQya 4Bse HncZ wWZa H3Uq lqfc"

const bph = new Headers()
bph.set("Content-Type","application/json")
bph.set('Authorization',"Basic " + Buffer.from(`${ourusername}:${ourpassword}`).toString("base64")
)

fetch("https://termonacional.com/wp-json/wp/v2/categories",{
    method:"POST",
    headers: bph,
    body: JSON.stringify({
        description: `¡Descubre nuestro Preformado de lana mineral de 1 1/2\" X 1 1/2\"! La solución perfecta para aislar y proteger tus tuberias. ¡No te conformes con menos!`,
        name:`1 1/2\" X 1 1/2\" Preformado de lana mineral`,
        slug: `Preformado-de-lana-mineral-1-1-2-X-1-1-2`,
        parent: "PREFORMADO DE LANA MINERAL",
        meta: "PREFORMADO DE LANA MINERAL, LANA MINERAL, MEDIAS CAÑAS, TRAMOS DE LANA MINERAL, AISLAMIENTO TERMICO"	
    })
})
console.log(bph)
}

go()