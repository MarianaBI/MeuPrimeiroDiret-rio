importar  React  de  'react' ;
importar  ReactDOM  de  ' react -dom' ;
import  './index.css' ;
importar  aplicativo  de  './App' ;
importar  reportWebVitals  de  './reportWebVitals' ;

ReactDOM . render (
  < React . StrictMode >
    < App  / >
  < / React . StrictMode > ,
  documento . getElementById ( 'root' )
) ;

// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals (console.log))
// ou envie para um endpoint analítico. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals ( ) ;