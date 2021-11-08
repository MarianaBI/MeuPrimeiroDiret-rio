    function salarioColaborador(salario = 281, aumento, novoSalario) {
        if(salario <= 280) aumento = (salario * 20) / 100;
         else if (salario > 280 && salario <= 700)
            aumento = (salario * 15) / 100;
         else if (salario > 700 && salario <= 1500)
            aumento = (salario * 10) / 100;
         else aumento = (salario * 5) / 100;
            
         return (novoSalario = salario + aumento);
    }

    console.log('Salario atual: R$$ {salarioColaborador()}');

    function maiorNumero(){
        let num1 = 10;
        let num2 = 20;
        let num3 = 90
        let num4 = 50

        if (num1 > num2) return 'O numero ${num1} é maior' ;
        else if (num2 > num3) return 'O numero: ' + num2 + 'é maior';
        else if (num3 > num4) return 'O numero $ (num3) é o maior';
        else return 'O numero ${num4} é maior';
    }

    console.log(maiorNumero());