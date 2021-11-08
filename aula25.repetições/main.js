let contador = 1;

while (contador <= 10) {
    console.log('Valor = ${contador}');
    //contador++; // contador = contador + 1
    contador = contador + 2;
}

console.clear();
//WHILE ESTRUTURA DE REPETIÇÃO
let contador2 = 10;

while (contador2 >=0) {
    console.log('Valor = ${contador2}');
    contador2 = contador2 - 1;
}

console.clear();
// DO-WHILE ESTRUTURA DE REPETIÇÃO
let i = 0; 1
text = '';

do {
  text += 'O numero é ${i}\n';
  i++;
} while (i < 10);
console.log(text);

console.clear();
// FOR LAÇO DE REPETIÇÃO
for (let i = 0; i <10; i = i + 1) console.log('Laço for número: ${i}');

console.clear();

//LAÇOS DE REPETIÇÃOCOM ARRAYS
const frutas = ['maçã','Laranja', 'melancia', 10, true, 'Catarina', 'Irmão do Jorel',];

console.log(frutas);

for(let i = 0; i < frutas.length; i++)
console.log('O nome da fruta é: ${frutas[i]}');

        
