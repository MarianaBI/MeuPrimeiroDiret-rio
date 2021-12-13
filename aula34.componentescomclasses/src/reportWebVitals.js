const  reportWebVitals  =  onPerfEntry  =>  {
    if  ( onPerfEntry  &&  onPerfEntry  instanceof  Function )  {
      importar ( 'web-vitals' ) . então ( ( { getCLS , getFID , getFCP , getLCP , getTTFB } )  =>  {
        getCLS ( onPerfEntry ) ;
        getFID ( onPerfEntry ) ;
        getFCP ( onPerfEntry ) ;
        getLCP ( onPerfEntry ) ;
        getTTFB ( onPerfEntry ) ;
      } ) ;
    }
  } ;
  
  exportar  relatórios WebVitals padrão  ;