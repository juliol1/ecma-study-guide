const data = {
    frontend: 'julio',
    backend: 'Julio',
    design: 'Julio',
};

const entries = Object.entries(data);
console.log(entries);

const data = {
    frontend: 'julio',
    backend: 'Julio',
    design: 'Julio',
};

const values = Object.values(data);
console.log(values);


// padding

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(27, ' como esta perro'));

// trailing commas son las comas
// que se pondrian al final del
// objecto para añadir una nueva
// propiedad

const obj = {
    name: 'julio',
};

// clase #9 async y await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();