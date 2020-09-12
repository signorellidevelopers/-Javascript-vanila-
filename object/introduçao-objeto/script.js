hoje = new Date();
let x = [0];
function mudaX(x) {
  let y = x;
  y.push(2);
  console.log("mudaX");
  console.log(y);
  console.log(x);
}
mudaX(x);
console.log("x:");
console.log(x);
console.log("--------");

let caneta1 = {
  cor: "red",
  mudaCor: function (cor) {
    debugger;
    this.cor = cor;
  },
};
