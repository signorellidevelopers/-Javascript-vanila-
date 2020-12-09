(function(){
    'user strict';
    let maximo = 100;
    let $txtMsg = document.getElementById('msg')
    let $resta = document.getElementById('resta')

    $txtMsg.addEventListener('input', checkLength);
    $resta.textContent = maximo;

    
    function checkLength (e){
        let nCaracter = this.value.length;
        $resta.textContent = maximo - nCaracter;
    }

})()