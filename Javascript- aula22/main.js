// Funções (simples)
//var num3 = 3;
function addNums(num1 = 2, num2 = 5) {
    return "num1 + num2";
}

console.log(addNums());
console.log(addNums);

let x = addNums(0, 25);

//Funçáo com IF
function valida (x) {
       if(x == 25)
           return "Igual";
        else
            return "Diferente";
}

console.log(valida(25));

//Faz a chamada 
let z = myFunc (1, 5);
console.log(z);

function myFunc (num1, num2){
    return num1 * num2;
}

// ARROW FUNCTION
const hello = () => {
    return "Olá Arrow Function"
}

console.log(hello());
console.clear();

const addNums = (num1 = 1, num2 =1) =>{
    return  num1 + num2;
}
console.log(addNums2());

// Arrays
const bicicleta = {
    rodas : 4,
    cor : "Verde",
    name : "Bmx",
    peso : 300,
    modelo : "XJT200",
    marca : "Roberslei",
    peça : "guidao"
}

console.clear();

//Função boas vindas () carregando evento com load 
//(Função Simples)
function boasVindas() {
    alert("Bem vindo a nossa página");
    console.log("Bem vindo a nossa página");
}

//Função eventClique() carregando evento onclick
//(Arrow Function)
const eventClique = () => {
    alert("Você clicou em um botão");
    console.log("Você clicou em um botão");
}

//Função mouseEmCima() carregando evento onmouseover
//(Arrow Function)
const mouseEmCima = () => {
    console.log("Mouse está em cima do título");
}




//Crie uma função que calcule a média de 4 notas e exiba o resultado no console.log
const media =(nota1 = 5, nota2 = 7, nota3 = 6, nota4 = 10) => {
    return (nota1 + nota2 + nota3 + nota4) /4;
}

console.log(media());


//Crie uma função que faça a onversão de Celsius para Fahrenheit e exiba o resultado no console.log

const Celsius = (num1 = 23) =>{
    return (num1*1.8) + 32;
}

console.log(Celsius())