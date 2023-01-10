const body = document.querySelector('body')
const ul = document.createElement('ul');
body.appendChild(ul)
const frutas = ['abacaxi','banana','caju', 'damasco','ervilha'];

for (let index = 0; index < frutas.length; index++) {
    let li = document.createElement('li')
    const element = frutas[index];
    li.innerText=`${element}`
    ul.appendChild(li)   
}

frutas.forEach((element, i) => {
    console.log(i, element);
});

console.log('********************************************');

const pares = [];
for (let index = 0; index <= 20; index+=2) {
    pares.push(index)
    console.log(index);
}
console.log(pares);

console.log('********************************************');
let i = 0;
while (i < 5) {
    console.log(i);
    i++; 
}

console.log('********************************************');
for (const fruta of frutas) {
    console.log(fruta.toUpperCase());
    
}

console.log('********************************************');

const numeros = [1,2,3,4,5]
numeros.map(value => console.log(Math.pow(value, 2)) );

console.log('********************************************');

const maiores = [23, 65, 89, 5, 3];

bigNumber = Math.max(...maiores, 101)
console.log(bigNumber);

let nMaior = 0;
for (let index = 0; index < maiores.length; index++) {
   if (nMaior > maiores) {
    
   }
    
}