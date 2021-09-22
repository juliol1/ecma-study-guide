// clase 9 ES 9 

// operador de reposo 

const obj  = {
    name: 'julio',
    age: 24,
    country: 'mx',
};

let { name, ...all } = obj;
console.log(name, all);

// aqui con el let estamos restructurando el objeto
// esto funciona para cuando necesitamos quitar ciertas
// propiedades del objeto

// Propiedades de propagación

const obj = {
    name: 'julio',
    age: 24,
}

const obj1 = {
    ...obj,
    country: 'Mx',
};

console.log(obj);
console.log(obj1);

// promise.finally
// cuando termina el llamado

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));


// Regex ???

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);