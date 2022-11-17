const nombreTrabajador = prompt(`Ingrese nombre`)
const sueldoBasico = prompt(`Ingrese sueldo básico`)
const numeroHijos = prompt(`Ingrese número de hijos`)
const bonificacion = parseInt(sueldoBasico)*0.07
const sueldoConBonificacion = parseInt(sueldoBasico) + bonificacion
let sueldoFinal=0
if (parseInt(numeroHijos)>0) { 
    sueldoFinal = sueldoConBonificacion
} else {
    sueldoFinal = sueldoBasico
}

alert(`
    EJERCICIO N°1\n
    Tienes una bonificación de: ${bonificacion}\n
    Tu sueldo final es: ${sueldoFinal}
`)
