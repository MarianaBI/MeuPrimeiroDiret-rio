
   
// Exercício
classe  ContaBancaria {
    construtor ( nome ,  idade ,  salário ,  sexo ,  agência ,  conta ,  tipoConta ) {
        isso . nome  =  nome ;
        isso . idade  =  idade ;
        isso . salario  =  salário ;
        isso . sexo  =  sexo ;
        isso . agencia  =  agência ;
        isso . conta  =  conta ;
        isso . tipoConta  =  tipoConta ;
    }

    contaPoupança ( ) {
        devolva  isso . salario  -  ( this . salario  *  0,015 ) 
    }

    contaCorrente ( ) {
        devolva  isso . salario  -  ( this . salario  *  0,036 ) 

    }
    contaEstudante ( ) {
        devolva  isso . salario  -  ( this . salario  *  0,012 ) 

    }
}

// Instanciando

const  estudante1  =  nova  contaBancaria ( 'Julia' ,  18 ,  1200 ,  'Feminino' ,  'Banco Pipoca' ,  2003 ,  'contaEstudante' ) ;

console . log ( estudante1 ) ;
console . log ( 'O novo salário é:' ,  estudante1 . contaEstudante ( ) ) ;