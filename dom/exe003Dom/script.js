// IIFE

let txtNome2 = document.querySelector('#textNome');

   function clicar(){
       let nome = txtNome2.value;
       document.querySelector('#msg').innerHTML ="Bem vindo,  <b> " + nome + "</b>";
   }
