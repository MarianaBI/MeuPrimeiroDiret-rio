// Array de objetos 
/// EXERCÍCIO 1
const  alunas  =  [
    {
        id : 1 ,
        primeiroNome : 'Luna' ,
        lastName : 'Kim' ,
        idade : '17' ,
        materiaDestaque : 'Inglês' ,
        notas : [ 10 ,  10 ,  10 ,  9,5 ,  10 ,  8 ] ,
        endereço : [ 'Av. Rosa Bueno ' ,  49 ,  ' SP ' ] ,
    } ,
    {
        id : 2 ,
        primeiroNome : 'Aya' ,
        lastName : 'Lee' ,
        idade : 18 ,
        materiaDestaque : 'Matemática' ,
        notas : [ 8 ,  10 ,  10 ,  10 ,  7 ,  5 ] ,
        endereço : [ 'Rua Vasconcelos' ,  102 ,  'SP' ] ,

    } ,
    {
        id : 3 ,
        primeiroNome : 'Wenndy' ,
        lastName : 'Kimoto' ,
        idade : '17' ,
        materiaDestaque : 'Química' ,
        notas : [ 10 ,  8 ,  6 ,  8 ,  5 ,  7 ] ,
        endereço : [ 'Rua Dois corações' ,  77 , 'SP' ] ,
    } ,
] ;


para ( deixar  aluna  =  0 ;  aluna  <  Alunas . comprimento ;  aluna ++ ) {  // Aqui IRA percorrer como Alunas e SEUS matriz
    deixar  nota  =  Alunas [ aluna ] . notas ;
    deixe  total  =  0 ;
    for ( deixe  i  =  0 ;  i  <  nota . comprimento ;  i ++  ) {  // irá percorrer os array dos arrays
        total  =  total  +  nota [ i ] ;  // Para somar as notas
        media  =  total  /  nota [ i ]  // para dividir como notas pela contidade de notas
        function  alunaMedia ( mediaTotal  =  media ) {
            if  ( mediaTotal  >  7 ) {
                voltar  'Aprovada'
            } else {
                retornar  'Reprovada'
            }
        }
        
    }   
    
    console . log ( `Aluna $ { alunas [ aluna ] . firstName } com como notas ( $ { alunas [ aluna ] . notas } ), mora no endereco: $ { alunas [ Aluna ] . endereco } . Teve uma mídia $ { mídia } , portanto foi $ { alunaMedia ( ) } ` ) ;
}
    
console . log ( '' )



 
// /// EXERCÍCIO 2   
const  pizza  =  [
    {
        id : 1 ,
        sabor : 'Queijo' ,
        ingredientes : [ 'Massa' ,  'Queijo' ,  'Molho de tomate' ,  'Orégano' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : verdadeiro ,
        diaDaPromoção : 'Terça-feira'
    } ,
      {
        id : 2 ,
        sabor : 'Calabresa' ,
        ingredientes : [ 'Massa' ,  'Calabresa' ,  'Molho de tomate' ,  'Cebola' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : falso ,
        diaDaPromoção : 'Sexta-feira'
    } ,
   {
        id : 3 ,
        sabor : 'Portuguesa' ,
        ingredientes : [ 'Massa' ,  'Queijo' ,  'Presunto' ,  'Molho de tomate' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : falso ,
        diaDaPromoção : 'Quarta-feira'
    } ,
] ;

para ( deixe  cont  =  0 ;  cont  <  pizza . comprimento ;  cont ++ ) {
deixe  promoDia  =  pizza [ cont ] . promoção
deixe  valor  =  50 ;

function  promocaoDoDia ( ) {
    if ( promoDia  ==  true ) {
        deixe  desc  =  ( valor  *  0,25 ) ;
        deixe  totalDesc  =  valor  -  desc ;
        return  `está por apenas $ $ { totalDesc } reais, promoção do dia 25% de desconto. Proveite`
    
    } else {
        return  'não está na promoção' ;
    }
    
}
console . log ( `Uma pizza $ { pizza [ cont ] . sabor . toUpperCase ( ) } ou $ { pizza [ cont ] . sabor . substr ( 1 , 5 ) } de $ $ { valor } reais, $ { promocaoDoDia ( ) } ! ` )
}