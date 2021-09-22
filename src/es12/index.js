// Replace all

const string = "Javascript esta chido y con Javascript puedo escribir lo que quiera en la web";
const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);

// Metodos privados

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val){
        ...
    }
}

const message = new Message();
message.show('Hola!');

// promise any

const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// with ref se garantiza que no sea recogido por el
// garbage collector

class anyClass {
    constructor(elemento){
        this.ref = new WeakRef(element)
    }
    {...}
}

// operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
