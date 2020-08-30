// function mediaAluno(){
//     let n1 = prompt('Digite a primeira nota!');
//     n1 = Number(n1);
//     let n2 = prompt('Digite a segunda nota!');
//     n2 = Number(n2);
//     let mediaA = (n1 + n2) / 2;
//     console.log(mediaA);
// }
//  mediaAluno();

  // IIFE
    // desta forma fica mais pratico
(function(){
    function mediaA(){
      
        let total = 0;
        let qtd = arguments.length;
        let x = 0;
       // sentança fragil while ( arguments[x])  {
        while (typeof arguments[x] === 'number') {
            total += arguments[x];
            x++;
        }

        return total / qtd; 
    }
        let media1 = mediaA(2,3,5,7,9,10);
        let media2 = mediaA(4,0,0,10);
        console.log('Media 1 ', media1);
        console.log('Media 2 ', media2);
    
})()