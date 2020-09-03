// IIFE
(function(){
    let nome = prompt('Qual seu nome?');
    document.querySelector('#msg').innerHTML = "Bem vindo,  <b> " + nome + "</b>";
})()