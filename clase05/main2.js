const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function getNombres (productos){
    const nombres = []
    for (const producto of productos){
        nombres.push(producto.nombre)
    }
    return nombres.join(', ')
}
console.log(getNombres(productos))

/*
function getPrecioTotal(prods){
    let precioTotal = 0
    for (const producto of prods) {
        precioTotal += producto.precio
    }
    return to2Decimales(precioTotal)
}

function to2Decimales(val){
    return Number(val.toFiexed(2))
}

console.log(getPrecioTotal(productos))
*/

