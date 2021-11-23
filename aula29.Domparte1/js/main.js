// Janela Objeto

console . log ( janela ) ;

janela . alerta ( 'Olá Mundo' ) ;

alerta ( 'Olá Mundo' ) ;

/// DOCUMENT ()

// alterar o título
documento . título  =  'DOM' ;

// // Criar um elemento <h1>
deixe  título  =  documento . createElement ( 'H1' ) ;  // Criando o H1
título . innerHTML  =  'Olá Alunos!' ;  // Colocando um texto no H1
documento . corpo . appendChild ( cabeçalho ) ;  // informando q h1 vai ser filho do BODY
título . estilo . borderBottom  =  'solid 3px #ccc'  // Colocando bordar

deixe  div  =  document . createElement ( 'div' ) ;
div . innerText  =  'Mundo dos trouxas!' ;
documento . corpo . appendChild ( div ) ;
div . estilo . backgroundColor  =  '# f1c2c5' ;


deixe  b  =  documento . createElement ( 'Botão' ) ;
b . innerHTML  =  'Aceitar' ;
documento . corpo . appendChild ( b ) ;
b . estilo . marginTop  =  '2rem' ;
b . estilo . backgroundColor  =  '# c5f5b9' ;

deixe  p  =  documento . createElement ( 'p' ) ;
p . innerHTML  =  'Estamos entendendo o DOM' ;
documento . corpo . appendChild ( p ) ;
p . estilo . color  =  '# f2ccbb'

// ====================================================== =====================================

/ ** Uma única diferença entre innerText e innerHTML é que innerText 
 * insira uma string como está no elemento, enquanto a innerHTML executa
* como conteúdo html. * /


/ ** ⦁ Método getElementById
O método getElementById é o modo para comum de acesso a um elemento HTML na página web.
Esse método retorna uma referência do elemento através do ID do atributo ou null se um ID não encontrado. Esse é um dos motivos do atributo id em uma página da web ser único.
Observe no arquivo index.html, que colocamos o atributo id na marcação <h2>.
 * /

let  titulo  =  document . getElementById ( 'titulo' ) ;

// Alterando o conteúdo do elemento.
titulo . innerHTML  =  'Olá meus caros alunos!' ;

// Configurando o estilo CSS do elemento.
titulo . estilo . textAlign  =  'centro' ;
titulo . estilo . backgroundColor  =  '# ccccc9' ;
titulo . estilo . borderBottom  =  'solid 3px # 000' ;
titulo . estilo . margem  =  '20px' ;

/ ** ⦁ Método getElementsByClassName
O método getElementsByClassName retorna a coleção de todos os 
elementos do documento com uma classe específica. Isso significa que
esse método pode retornar mais de um elemento.
 * /

// Método getElementsByClassName
deixe  itens  =  documento . getElementsByClassName ( 'item' ) ;
console . log ( itens ) ;
console . log ( itens [ 0 ] ) ;
itens [ 0 ] . textContent  =  'Olá 2' ;
itens [ 0 ] . estilo . fontWeight  =  'negrito' ;
// items [0] .style.backgroundColor = 'yellow';

// Utilizando o laço de repetição Para alterar todo o elemento do html

// para (deixe i = 1; i <items.length; i ++) {
// items [i] .style.backgroundColor = '# f5f599';
//}

/ ** ⦁ Método getElementsByTagName
O método getElementsByTagName retorna a coleção de todos os elementos do 
documento com tag, ou seja, com a mesma marcação HTML. Isso significa que esse
método pode retornar mais de um elemento.
 * /
// Método getElementsByTagName
deixe  li  =  documento . getElementsByTagName ( 'li' ) ;
console . log ( li ) ;

para  ( seja  i  =  0 ;  i  <  li . comprimento ;  i ++ )  {
    if  ( i  %  2 )  li [ i ] . estilo . backgroundColor  =  '# f4f4f4' ;
    else  li [ i ] . estilo . backgroundColor  =  '# f2f2' ;
}


/ ** ⦁ Método getElementsByName
O método getElementsByName retorna a coleção de todos os 
elementos do documento com o nome específico, ou seja, esse método 
verifica o nome do atributo HTML. Isso significa que esse método pode retornar
 mais de um elemento.
 * /

// Método getElementsByName
deixe  nome  =  documento . getElementsByName ( 'fitem' ) ;
console . limpar ( ) ;
console . log ( nome ) ;
nome [ 0 ] . textContent  =  'Olá pessoas' ;
nome [ 0 ] . estilo . backgroundColor  =  'amarelo' ;
nome [ 1 ] . textContent  =  'Tudo bem?' ;
nome [ 1 ] . estilo . backgroundColor  =  '# BAC1FB' ;


// Remover elemento no DOM
deixe  item2  =  documento . getElementById ( 'item2' ) ;
item2 . remover ( )