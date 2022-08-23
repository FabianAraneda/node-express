//Crear listas de objetos
const employees = [
    { id: 1, name: 'Fabian'},
    { id: 2, name: 'Emilia'},
    { id: 3, name: 'Rodrigo'}
]

const salaries = [
    { id: 1, amount: 1000},
    { id: 2, amount: 3000}
]

const getEmployee = ( id ) => {
    /*Las promesas trabajan recibiendo un callback como argumento (parametro) los cuales son:
    resolve: Es un callback que se llama cuando todo funciona OK
    reject: Es un callback que se llama cuando falla */

    // const promesa = new Promise( ( resolve, reject ) => {
    //     const employee = employees.find( e => e.id === id )?.name; // funcion que verifica si es que existe id en el arreglo

    //     if ( employee ){
    //         resolve( employee );
    //     } else {
    //         reject(`No existe empleado con id ${id}`);
    //     }
    // });
    // return promesa;

    //Manera más limpia de hacer lo mismo de arriba
    return new Promise( ( resolve, reject ) => {
        const employee = employees.find( e => e.id === id )?.name; // funcion que verifica si es que existe id en el arreglo

        employee ? resolve( employee ) : reject(`No existe empleado con id ${id}`);
    });
};

const getSalary = ( id ) => {
    return new Promise ( ( resolve, reject ) => {
        const salary = salaries.find( e => e.id === id)?.amount;
        salary ? resolve( salary ) : reject(`No existe salario para el empleado con id ${id}`);
    });
}

//Llamadas a las promesas
const id = 2;

// getEmployee( id )
//     .then( employee => console.log( employee )) // El resolve de la promesa se maneja con then
//     .catch( error => console.log( error )); // El reject de la promesa se maneja con el catch

// getSalary( id )
//     .then( salary => console.log(salary))
//     .catch( error => console.log(error))

// getEmployee( id )
//     .then( employee => { // El resolve de la promesa se maneja con then
//         getSalary( id )
//             .then( salary => console.log('El empleado:', employee, ', tiene un salario de:', salary) )
//             .catch( error => console.log(error))
//     })
//     .catch( error => console.log( error )); // El reject de la promesa se maneja con el catch

let nombre;

getEmployee( id )
    .then( employee => { // El resolve de la promesa se maneja con then
        nombre = employee;
        return getSalary( id )
    })
    .then( salary => console.log('El empleado:', nombre, ' tiene un salario de:', salary)) //then para recibir la respuesta a la promesa llamada en la linea anterior
    .catch( error => console.log( error )); // El reject de la promesa se maneja con el catch