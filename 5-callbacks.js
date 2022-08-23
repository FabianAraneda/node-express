
// setTimeout( () => {
//     console.log("hellow madafakas")
// } , 1000);

//Simular una llamada a la BBDD
const getUserById = ( id, callback) => {
    const user = {
        //Colocar id: id (el parametro) es redudante desde E6
        id,
        nombre: 'Fabian'
    }

    setTimeout( () => {
        //Llamar a la funcion "NodeCall"
        callback( user )
    }, 1500);
};


getUserById(10, ( user ) => { //Se crea una función flecha "NodeCall"
    console.log( user.id );
    console.log( user.nombre.toUpperCase() );
});