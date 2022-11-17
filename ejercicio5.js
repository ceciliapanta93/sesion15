const nombreAlumno = prompt(`Ingrese su nombre`)
const notaParcial = prompt(`Ingrese nota parcial`)
const notaFinal = prompt(`Ingrese nota final`)
const promPracticas = prompt(`Ingrese promedio de prácticas`)
let nombrefinal = ""
let promedioFinal = ""
const promedio = (
    parseInt(notaParcial) +
    (parseInt(notaFinal)*2) +
    parseInt(promPracticas)
)/ 4
if( promedio>= 11){
    nombrefinal = nombreAlumno
    promedioFinal = promedio
}

alert(`
    EJERCICIO N°5\n
    Nombre de alumno: ${nombrefinal}\n
    El promedio final es: ${promedioFinal}\n
    
`)

