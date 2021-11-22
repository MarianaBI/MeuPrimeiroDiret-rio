// Classe
class  Carro  {
    construtor ( nome ,  ano ) {
        isso . nome  =  nome ;
        isso . ano  =  ano ;
    }
}

 // Instanciando Objetos a classe
 deixe  meuCarro1  =  novo  Carro ( 'Ford' ,  2018 ) ;
 let  meuCarro2  =  novo  Carro  ( 'Corsa' ,  2003 ) ;

 // Imprimindo as informações
 console . log ( meuCarro1 ) ;
 console . log ( meuCarro1 . nome ) ;
 console . log ( meuCarro1 . ano ) ;
 console . log ( meuCarro2 ) ;
 console . log ( meuCarro2 . nome ) ;
 console . log ( meuCarro2 . ano ) ;

console . limpar ( ) ;
// Nova classe com mais de um metodo
 class  NovoCarro  {
     construtor ( nome ,  ano ) {
         isso . nome  =  nome ;
         isso . ano  =  ano ;
    
        }

        idadeCarro ( ano ) {
         voltar  ano  -  isso . ano ;
     }
}
  // Buscando a Data atual
  deixar  dateHoje  =  nova  data ( ) ;
  deixe  ano  =  dateHoje . getFullYear ( ) ;

  // Instanciando o Objeto novoCarro
  deixe  meuNovoCarro  =  novo  novoCarro ( 'Corsa' ,  2003 ) ;

  console . log ( meuNovoCarro . idadeCarro ( ano ) ) ;

  console . log ( dataHoje ) ;


  console . limpar ( ) ;


  // Criando nova Classe
  class  ClassePessoa {
      construtor ( firstName ,  lastName ,  dob ) {
          isso . firstName  =  firstName ;
          isso . lastName  =  lastName ;
          isso . dob  =  nova  data ( dob ) ;
      }
  
      getFullYear ( ) {
          devolva  isso . dob . getFullYear ( ) ;
        }
    
      // getFullYear () {
      // retorna `$ {this.firstName} $ {this.lastName}`;
      //}

      // Outra forma de criar um metodo (com este ou nome de variáveis)
      // const getFullName = () => {
      // retorna `$ {this.firstName} $ {this.lastName}`;
      //};
    }

// Instanciar um objeto Pessoa 
deixe  pessoa1  =  novo  ClassePessoa ( 'Irmão do' , 'Jorel' , '2007-05-08' ) ;
deixe  pessoa2  =  novo  ClassePessoa ( 'Pipoca' , 'Animada' , '1970-06-07' ) ;


console . log ( pessoa1 ) ;

console . log ( pessoa1 . dob . getFullYear ( ) ) ;
console . log ( pessoa1 . getBirthYear ( ) ) ;
console . log ( pessoa . getFullName ( ) ) ;