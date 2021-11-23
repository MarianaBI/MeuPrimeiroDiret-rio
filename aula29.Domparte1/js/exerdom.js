
documento . corpo . estilo . textAlign  =  'centro' ;
documento . corpo . estilo . margem  =  '4rem' ;

 botão de função ( ) {
    deixe  mes  =  janela . prompt ( 'Informe o mês do Ano' ) ;       
    deixe  h3  =  documento . createElement ( 'H3' ) ;
    documento . corpo . appendChild ( h3 ) ;
    
    
    if ( mes  ==  'Janeiro'  ||  mes  ==  'Fevereiro'  ||  mes  ==  'Março' ) {
        // Inverno
        h3 . innerHTML  =  `O mês escolhido é $ { mes } , e a estação do ano é Inverno` ;
        h3 . estilo . backgroundColor  =  '# 019fe6' ;
        h3 . estilo . borderBottom  =  '2px solid # 000' ;
        h3 . estilo . color  =  '#fff' ;

    } else  if ( mes  ==  'Abril'  ||  mes  ==  'Maio'  ||  mes  ==  'Junho' ) {
        // Primavera
        h3 . innerHTML  =  `O mês escolhido é $ { mes } , e a estação do ano é Primavera` ;
        h3 . estilo . backgroundColor  =  '# c44c72' ;
        h3 . estilo . borderBottom  =  '2px solid # 000' ;
        h3 . estilo . color  =  '#fff' ;

    } else  if ( mes  ==  'Julho'  ||  mes  ==  'Agosto'  ||  mes  ==  'Setembro' ) {
        // verão
        h3 . innerHTML  =  `O mês escolhido é $ { mes } , e a estação do ano é Verão` ;
        h3 . estilo . backgroundColor  =  '# 76c104' ;
        h3 . estilo . borderBottom  =  '2px solid # 000' ;
        h3 . estilo . color  =  '#fff'

    } else  if ( mes  ==  'Outubro'  ||  mes  ==  'Novembro'  ||  mes  ==  'Dezembro' ) {
        // Outono
        h3 . innerHTML  =  `O mês escolhido é $ { mes } , e a estação do ano é Outono` ;
        h3 . estilo . backgroundColor  =  '# fea607' ;
        h3 . estilo . borderBottom  =  '2px solid # 000' ;
        h3 . estilo . color  =  '#fff' ;
    }
}