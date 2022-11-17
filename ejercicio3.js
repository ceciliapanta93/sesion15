const numero1 = prompt(`Ingrese un número`)
let resultado1 = 1
let cadenaTextol="1"
for (let n = 2; n <= parseInt(numero1); n++) {
    
    resultado1 = resultado1 * n
    cadenaTextol = cadenaTextol + "x" + n
}
alert(`
    EJERCICIO N°3\n
    Tu número es: ${numero1}\n
    El factorial es: ${cadenaTextol}\n
    Tu resultado final es: ${resultado1}
`)