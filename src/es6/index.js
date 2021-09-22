// funciones normalmente

function newFunction(name, age, country) {
    var name = name || 'julio';
    var age = age || 24;
    var country = country || 'Mx';
    console.log(name, age, country);
}

// es6

function newFunction2(name = 'julio', age = 24, country = 'Mx'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Oscar', '23', 'Co');

// Template literals

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multinea antes y despues de es6
let lorem = "Esta frase tiene varias palabras separadas \n"
+ "Aqui hay otra frase con muchos espacios";

let lorem2 = `esta frase esta muy completa
y no es necesario poner el slash n para separar
renglones`;

console.log(lorem);
console.log(lorem2);

// destructurar elementos

let person = {
    'name': 'julio',
    'age': 32,
    'country': 'Mx'
};

console.log(person.name, person.age);

let {country} = person;
console.log(country);

// union de arrays

let team1 = ['julio', 'ricardo', 'leoncio'];
let team2 = ['denis', 'danna', 'zaira'];

let education = ['David', ...team1, ...team2];

console.log(education);

// let solo va a estar disponible en el scope
// en donde este declarado

/* const solo puede asignar un valor
una vez no se puede re asignarle otro valor
a diferencia de con var y let */

let name = 'julio';
let age = '24';

//es5
obj = {name: name, age: age};

// es6
obj2 = {name, age};
console.log(obj2);

// funciones de tipo flecha

const names = [
    {
        name: 'julio',
        age: '24'
    },
    {
        name: 'Juan',
        age: '21'
    }
];

let listOfNames = names.map(
    function(item){
        console.log(item.name);
    }
);

let listOfNames2 = names.map(
    item => console.log(name)
);

/* 
    Asincronismos y Promesas

    las promesas vinieron a arreglar
    un problema que traian con el 
    callback held.

    La promesa dice que algo va a pasar
    en cierto tiempo.
*/

const helloPromise = () => {
    return new Promise((resolve, reject) =>
    {
        if(true){
            resolve('Hey!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response =>console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));



class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));