const importeCuenta = prompt(`Ingrese importe`)
let desctfinal = 0
let importefinal = parseInt(importeCuenta)
if (parseInt(importeCuenta)>=150) {
   desctfinal = parseInt(importeCuenta)*0.12
   importefinal = parseInt(importeCuenta) - desctfinal

}
alert(`
    EJERCICIO N°4\n
    Tu importe de compra es: ${importeCuenta}\n
    El descuento es: ${desctfinal}\n
    Tu importe final es: ${importefinal}
`)