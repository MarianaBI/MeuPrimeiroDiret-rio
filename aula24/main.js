const a = 10;
if (a == 10) {
    console.log("Os valores são iguais");
}else if (a > 10){
console.log("A variavel A não é igual a 10 e não é maior que 10")
}

//SWITCH
const nota = 6;

switch(nota) {
  case 4:
    console.log("Reprovado!")
    break;
  case 6:
    console.log("Recuperação");
    break;
    default:
        console.log("Final");
    break;  
}

const c = nota == 4 ? "Reprovado" : "Recuperação";
console.log (c) 


