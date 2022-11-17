const numero = prompt(`Ingrese un número`)
let resultado = numero
if (parseInt(numero)>500) { 
    resultado = parseInt(numero)*0.18
}
alert(`
    EJERCICIO N°2\n
    número: ${numero}\n
    El resultado es: ${resultado}
`)