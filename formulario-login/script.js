(function(){
    'user strict';
    let $txtMsg = document.getElementById('msg')
    let $resta = document.getElementById('resta')
    let maximo = $txtMsg.maxLength;

    $txtMsg.addEventListener('input', checkLength);
    $resta.textContent = maximo;

    
    function checkLength (e){
        let nCaracter = this.value.length;
        $resta.textContent = maximo - nCaracter;
    }

})()