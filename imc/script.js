//IIFE
(function(){
    'use strict';
    function calcImc(peso,alt){
       return peso /(alt*alt);   
    }
    function classificaIMC(imc){
        if(imc <= 16.9){
            return 'Muito abaixo do peso';

        }else if(imc <= 18.4){
            return 'abaixo do peso';
        } else if(imc <= 24.9){
            return 'peso normal';
        }else if(imc <= 29.9){
            return 'sobre peso';
        }else if(imc <= 34.9){
            return 'obsidade grau 1';
        }else if(imc <= 39.9){
            return 'obsidade grau 2';
        }else{
            return 'obsidade grau 3 obsidade morbida';
        }
       
    }
    let peso = prompt('digite seu peso');
    peso = Number(peso);

    let alt = prompt('digite sua altuta');
    alt = Number(alt);
    let imc = calcImc(peso,alt);
    let classificacao = classificaIMC(imc);
    console.log('classificação do IMC ' , classificacao );
})()

