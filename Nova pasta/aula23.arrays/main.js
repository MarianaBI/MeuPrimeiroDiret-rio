// Vamos Praticar 1

// Matrizes unidimensionais
// Podemos criar array assim
const  num1  =  novo  Array ( 30 ,  - 1 ,  5 ,  3 ,  121 ) ;
// Ou podemos fazer
const  num2  =  [ - 2 ,  40 ,  16 ,  111 ,  33 ,  64 ] ;

console . log ( num1 ) ;
console . log ( num2 ) ;

// Acessando elementos diversos dos arrays
console . log ( `primeiro elemento de num1: $ { num1 [ 0 ] } ` ) ;
console . log ( `primeiro elemento de num2: $ { num2 [ 0 ] } ` ) ;

console . log ( `terceiro elemento de num1: $ { num1 [ 2 ] } ` ) ;
console . log ( `quinto elemento de num2: $ { num2 [ 5 ] } ` ) ;

// Matrizes bidimensionais
console . limpar ( ) ;
 matriz  const =  [
    [ 'Banana' ,  'Maçã' ,  'Pêra' ] ,
    [ 'Laranja' ,  verdadeiro ,  1 ] ,
    [ null ,  'Uva' ,  - 350 ] ,
] ;

// Acessando elementos diversos dos arrays
console . log ( `Acessa a primeira linha: $ { matrix [ 0 ] } ` ) ;
console . log ( `Acessa o segundo elemento: $ { matrix [ 0 ] [ 1 ] } ` ) ;
console . log ( `Acessa o primeiro elemento: $ { matrix [ 0 ] [ 0 ] } ` ) ;


// Alterando um valor do array
console . limpar ( ) ;
let  moedas  =  [ 'Real' ,  'Dólar' ,  'Coroa' ,  'Peso' ] ;

console . log ( `Antes: $ { moedas } ` ) ;
moedas [ 2 ]  =  'Iene' ;
console . log ( `Depois: $ { moedas } ` ) ;

let  matrix1  =  [
    [ 1 ,  2 ,  3 ] ,
    [ 4 ,  5 ,  6 ] ,
] ;
console . log ( 'Antes:' ) ;
console . log ( matriz1 ) ;

matriz1 [ 0 ] [ 2 ]  =  - 10 ;
console . log ( 'Depois:' ) ;
console . log ( matriz1 ) ;



// Vamos Praticar 2

// Métodos em Arrays
console . limpar ( ) ;
deixe  numArray  =  [ 1 ,  2 ,  3 ,  4 ] ;
console . log ( typeof  numArray ) ;

deixe  numArray2  =  numArray . toString ( ) ;
console . log ( typeof  numArray2 ) ;


// Junte()
console . limpar ( ) ;
deixe  teste1  =  [ 0 ,  1 ,  2 ,  3 ,  4 ,  5 ] ;
deixe  teste2  =  teste1 . junção ( '***' ) ;
console . log ( teste2 ) ;


// Tamanho de Arrays
console . limpar ( ) ;
deixe  matriz  =  [ 0 ,  1 ,  2 ,  3 ,  4 ] ;
console . log ( array . comprimento ) ;


// Remover e inserir elementos
// pop ()
console . limpar ( ) ;
const  frutas1  =  [ 'Banana' ,  'Laranja' ,  'Maçã' ,  'Manga' ] ;
deixe  x  =  frutas1 . pop ( ) ;  // x = "mangá"

console . log ( frutas1 ) ;
console . log ( x ) ;


// Empurre()
console . limpar ( ) ;
const  frutas2  =  [ 'Banana' ,  'Laranja' ,  'Maçã' ,  'Manga' ] ;
deixe  y  =  frutas2 . empurrar ( 'Kiwi' ) ;  // y = 5

console . log ( frutas2 ) ;
console . log ( y ) ;


// mudança()
console . limpar ( ) ;
const  frutas3  =  [ 'Banana' ,  'Laranja' ] ;
deixe  z  =  frutas3 . shift ( ) ;  // z = 'Banana'

console . log ( frutas3 ) ;
console . log ( z ) ;


// unshift ()
console . limpar ( ) ;
const  frutas4  =  [ 'Banana' ,  'Laranja' ] ;
deixe  w  =  frutas4 . sem mudança ( 'Kiwi' ) ;  // w = 3

console . log ( frutas4 ) ;
console . log ( w ) ;


// delete
console . limpar ( ) ;
const  frutas5  =  [ 'Banana' ,  'Laranja' ,  'Maçã' ,  'Manga' ] ;
deletar  frutas5 [ 2 ] ;

console . log ( frutas5 ) ;