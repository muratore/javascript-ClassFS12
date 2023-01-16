const meuArray = ['Alessandro','Alice',true, 45, 'Dante', false, 'Julio', ' Silvia', '2023', 'janeiro']
const numberElements = meuArray.length;

console.log(numberElements, meuArray);

const lastElement = meuArray[meuArray.length -1]
console.log(`Last item is: ${lastElement}`);

for (let index = 0; index < meuArray.length; index++) {
    console.log(meuArray[index]);
    
}

const meuArrayMutante = meuArray.map((_ => 2));

function random() {
    return Math.floor(Math.random()*10);
}
console.log(random());

const numbers = meuArrayMutante.map(item => item + random())

console.log(numbers);
for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 === 1) {
            console.log(numbers[index]);
        }
}

console.log('*************************Maior que 4******************');
numbers.forEach((item) => {
    if(item > 4){
        console.log(item);
    }
})
console.log('*******************************************');

const pares = numbers.filter(item => item % 2 === 0);
console.log(pares);

const cores = ['verde','amarelo','laranja','vermelho','azul'];

cores.filter(item => console.log(item.toUpperCase()))

const indexColor = cores.indexOf('amarelo');
console.log(indexColor);
const newColors = cores.splice(indexColor,1)
console.log('*******************************************');

console.log(newColors);
console.log(cores);
console.log('*******************************************');

cores.forEach(item => console.log(item[0].toUpperCase() + item.slice(1)))