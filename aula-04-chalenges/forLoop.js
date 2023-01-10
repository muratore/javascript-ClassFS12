
console.log('************************************');
// Challenge show just even numbers from array number
const numbers = [23,54,2,4,6,24,68,21,34,37,89,09,33,23,12,4,56];

numbers.map(even =>{
    
    if (even % 2 === 0) {
        let li = document.createElement('li')
        li.innerText = even;
        showEvenNumbers.appendChild(li)
        console.log(li);
    }
})

console.log('************************************');
// Challenge show just square numbers from array number2
const numbers2 = [23,54,2,4,6,24,68,21,34,37,89,09,33,23,12,4,56];

numbers.forEach(number => {
    const squareNumber = Math.pow(number, 2)
    const li = document.createElement('li');
    li.innerHTML= squareNumber;
    squareNumbers.appendChild(li);
})

console.log('************************************');

// Challenge: Populate an array with a for
const arrayNumbers = []

for (let index = 0; index < 20; index+=2) {
    arrayNumbers.push(index)
    
}
console.log();