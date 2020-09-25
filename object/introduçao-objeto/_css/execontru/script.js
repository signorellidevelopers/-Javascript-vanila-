let pessoa1 = {
  nome: "Mario",
  sobrenome: "Signorelli",
};
let pessoa2 = {
  nome: "gabriel",
  sobrenome: "Signorelli",
};
let pessoa3 = {
  nome: "Elaine",
  sobrenome: "Signorelli",
};

let pessoas = [pessoa1, pessoa2, pessoa3];

let x = 0;
while (pessoas[x]) {
  console.log(pessoas[x].nome + " " + pessoas[x].sobrenome);
  x++;
}
