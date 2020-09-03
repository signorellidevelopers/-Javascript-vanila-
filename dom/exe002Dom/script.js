// IIFE
(function(){
    let nome = prompt('Qual seu nome?');
    document.querySelector('#msg').textContent = "Bem vindo " + nome;
})()