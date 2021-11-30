import  {  render ,  screen  }  from  '@ testing-library / react' ;
importar  aplicativo  de  './App' ;

test ( 'renderiza aprender a reagir link' ,  ( )  =>  {
  render ( < App  / > ) ;
  const  linkElement  =  screen . getByText ( / learn react / i ) ;
  esperar ( linkElement ) . toBeInTheDocument ( ) ;
} ) ;