(function(){
    'user strict';
    let $txtUser = document.getElementById('txtUser');
    let $txtPass = document.getElementById('txtPass');
    let $btn = document.getElementById('btn');

    $btn.addEventListener('click' , function(){
        alert('clicou no botão')
    })

    if(!txtUser.value  || !$txtPass.value){
        alert('preencha todos os campos');
    }
})()