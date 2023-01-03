const arrayScores = [9,8,7];

arrayScores.push(6);
console.log(arrayScores);

const fruitSalad = ["Maçã","Banana","Uva", "Pera", " Abacaxi"]; 
fruitSalad.push("Leite Consdensado", "Leite em pó");

console.log(fruitSalad);
fruitSalad.pop()
console.log(fruitSalad);
fruitSalad.splice(5,1)
fruitSalad.shift();
console.log(fruitSalad);

const names = ["Ronier", "Larissa", "Vandeci", 'Davi', 'Alessandro'];

let index = names.indexOf("Ronier");

if (index === -1) {
    console.log('Nome não encontrado');
}else{
    console.log(names[index]);
}

// Method some
const color = ['azul','branca','vermelho','branca'];

console.log(color.some( el => console.log(el === 'branca')));

// Method map
const toUpperCase = fruitSalad.map(el => el.toUpperCase());
console.log(toUpperCase);


// Method includes
console.log(names.includes('Larissa'));