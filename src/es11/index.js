// llamadas dinamicas para que solo use los recursos
// cuando se necesiten  

const b = document.getElementById("btn");

b.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// big int

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// promise all settle

const promise = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise, promise2, promise3])
    .then(response => console.log(response));

// global this

console.log(window);
console.log(globalThis);

// nullish coalescing operator ??

const fooo = 'asd' ?? 'default string';
console.log(fooo);

// optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
} else {
    console.log('fail')
};