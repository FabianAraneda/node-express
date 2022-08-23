//Entender primero el archivo callbacks.js
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

const getEmployee = ( id, callback ) => {
    const employee = employees.find( e => e.id === id )?.name; // funcion que verifica si es que existe id en el arreglo
    //Verificar si existe empleado
    if (employee) {
        callback(null, employee); //Se manda null primero para decirle a la funcion callback que no hay error
    }
    else {
        callback(`Empleado con id ${id} no existe`);
    }
    
};

const getSalary = ( id, callback ) => {
    const salary = salaries.find( e => e.id === id )?.amount; // funcion que verifica si es que existe id en el arreglo
    //Verificar si existe id de empleado en salaries
    if (salary) {
        callback(null, salary); //Se manda null primero para decirle a la funcion callback que no hay error
    }
    else {
        callback(`No existe salario para empleado con id ${id}`);
    }
}

//Llamadas a las funciones

const id = 2;

// crear funcion callback que reciba los errores
getEmployee( id, ( error, employee ) => {
    if (error){
        console.log('Error');
        return console.log(error);
    }

    getSalary(id , ( error, salary ) => {
        if (error){
            console.log('Error');
            return console.log(error);
        }
    
        console.log('El empleado:', employee, 'tiene un salario de:', salary);
    })
});

