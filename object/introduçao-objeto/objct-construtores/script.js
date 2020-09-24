function Caneta(preco, cor) {
  this.preco = preco || 1;
  this.cor = cor || "black";
  this.mudaCor = function (cor) {
    this.cor = cor;
  };
}
let caneta1 = new Caneta(5, "green");
