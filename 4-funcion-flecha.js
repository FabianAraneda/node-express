// Funcion tradicional ****tratar de no usar***
function sumar ( a, b ) {
    return a + b;
}

// Funcion flecha forma 1
const sumar1 = ( a, b ) => {
    return a + b;
};
// Funcion flecha forma 2 con return implicito (solo para las funciones que el cuerpo sea un return)
const sumar2 = ( a, b ) => a + b;

console.log(sumar(5, 5));
console.log(sumar1(5, 5));
console.log(sumar2(5, 5));