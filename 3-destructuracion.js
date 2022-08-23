const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// Lo mismo de arriba pero con destructuracion
const { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder );


//destructurar objeto para destructurar
function imprimeHeroe(heroe) {
    const { nombre, apellido, poder } = heroe;
    console.log(nombre, apellido, poder );
}
//Recibir objeto destructurado por parameto
function imprimeHeroe({ nombre, apellido, poder }) {
    console.log(nombre, apellido, poder );
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heores[0];
// const h2 = heores[1];
// const h3 = heores[2];
// Lo mismo de arriba pero con destructuracion
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);

const [ , , h4] = heroes;
console.log(h4);
