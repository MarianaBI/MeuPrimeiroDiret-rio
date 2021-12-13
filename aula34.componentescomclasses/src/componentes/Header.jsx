import  {  Component  }  de  'react' ;  
importar  PropTypes  de  'prop-types' ;  
  
const  estilo  =  {  
    cor : 'violeta' ,  
    borderBottom : 'blue solid 2px' ,  
    backgroundColor : 'green' ,  
} ;  
  
	export  class  Header  extends  Component  {  
	    render ( )  {  
	        return  (  
	            < seção >  
	                < h2  style = { estilo } > Olá, { isto . adereços . nome } , seja bem-vindo! < / h2 >
                    < rodapé > Este é o exercício de Contagem de cliques < / rodapé > 
	            < / seção >  
	        ) ;  
	    }  
	}  
	  
	Cabeçalho . defaultProps  =  {  
	    nome : 'Jordana' ,  
	} ;  
	  
	Cabeçalho . propTypes  =  {  
	    nome : PropTypes . corda ,  
	} ;  
    	exportar  cabeçalho padrão  ;