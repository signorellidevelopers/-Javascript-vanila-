 

 function init(){
    console.log('---------------------')
    let y;
    let x = 0;// Escopo global
    
    function mostraX(){
        let x = 10; // Escopo local
        let y = 30; // Escopo local
        let res = x*y;
       console.log('mostra x:', x );
       console.log('mostra y:', y);
       console.log(res);
    }
    mostraX();
    console.log('mostra x:', x );
    console.log('mostra y:', y );
    
 }
 init();
 // IIFE (Immediately-invoked function expression)
 (function(){
    // 'use strict' impede erro no escopo global
     isvalid = false;
 })()
  console.log(isvalid);
  function somar(arr){
      console.log(arguments);
      let result = 0;
      let x = 0;
      while (arguments[x]) {
          result += arguments[x];
          x++;
      }
      console.log('result', result);
  }
  somar(29,29,10,30);