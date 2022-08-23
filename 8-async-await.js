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

const id = 3;

// Agregar el "async" transforma una funcion para que esta retorne una promesa
const getInfoUsuario = async () =>{
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);
        return `El salario de ${employee} es de ${salary}`;

    } catch (error) {
        // El throw llama al cacth o al reject de la promesa asincrona (async)
        throw error;
    }
}

getInfoUsuario()
    .then( message => console.log(message))
    .catch(error => console.log(error));
