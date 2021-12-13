import  {  Component  }  de  'react' ;

classe  Exemplo  extends  Component  {
    // Declare uma nova variável de estado, a qual chamaremos de "contador"
    // e é um campo do estado do objeto
    construtor ( adereços )  {
        super ( adereços ) ;
        isso . estado  =  {
            contador : 0 ,
        } ;
    }

    render ( )  {
        return  (
            < div >
                < p > Você clicou { isso . estado . contador } vezes < / p >
                < botão
                    onClick = { ( )  =>
                        isso . setState ( {  contador : this . state . contador  +  1  } )
                    }
                >
                    Clique aqui
                < / botão >
            < / div >
        ) ;
    }
}

exportação  padrão  Exemplo ;