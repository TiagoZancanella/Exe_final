let listas_nome = [];
let cliente = true;
while (cliente) {
  let nome = prompt(" Digite um nome a lista: ")
  listas_nome.push(nome);
  let resposta = prompt(" Deseja adicionar mais nomes a sua lista? (sim/não)")
  cliente = resposta.toLowerCase() === "sim";
}

let listas_sobrenome = [];
let sobrenome = true;
while (sobrenome){
  let sobrenome1 = prompt(" Digite o sobrenome: ")
  listas_sobrenome.push(sobrenome1);
  let resposta = prompt(" Deseja adicionar mais algum sobrenome? (sim/não)");
  sobrenome = resposta.toLowerCase() === "sim";
}

let lista_cpf = [];
let cpf = true;
while (cpf) {
  let cpf1 = prompt(" Digite seu cpf: ")
  lista_cpf.push(cpf1);
  let resposta = prompt(" Deseja adicionar mais algum cpf? (sim/não)");
  cpf = resposta.toLowerCase() === "sim";
}

let lista_cidade = [];
let cidade = true;
while (cidade) {
  let cidade1 = prompt(" Digite sua cidade: ")
  lista_cidade.push(cidade1);
  let resposta = prompt(" Deseja adicionar mais alguma cidade? (sim/não) ");
  cidade = resposta.toLowerCase() === "sim";
}

let listas_saldo = [];

for (let i = 1; i <= 8; i++) {
  let salario = prompt("Informe seu salário " + i + ":");
  listas_saldo.push(salario);
}

console.log("Salários informados:", listas_saldo);

var saldo1 = parseInt(prompt("Digite seu saldo"));
var saldo2 = parseInt(prompt("Digite seu saldo"));
var saldo3 = parseInt(prompt("Digite seu saldo"));
var saldo4 = parseInt(prompt("Digite seu saldo"));
var saldo5 = parseInt(prompt("Digite seu saldo"));
var saldo6 = parseInt(prompt("Digite seu saldo"));
var saldo7 = parseInt(prompt("Digite seu saldo"));
var saldo8 = parseInt(prompt("Digite seu saldo"));

var media = ((saldo1 + saldo2 + saldo3 + saldo4 + saldo5 + saldo6 + saldo7 + saldo8) / 8);



if (media >= 0 && media <= 100000) {
  console.log("Você é pobre");
} else if (media >= 100001 && media <= 300000) {
  console.log("Você é rico");
} else if (media >= 300001 && media <= 700000) {
  console.log("Você é bem de vida");
} else if (media >= 700001 && media >= 1000000) {
  console.log("Você é milionário");
} else {
  console.log("Inválido");
}
console.log("Olá, seja bem vindo: " + listas_nome.join(", "));
console.log("Media saldo");
console.log(" os salarios são", listas_saldo);
console.log(" Os nomes são :", listas_nome);
console.log(" os sobrenomes são:", listas_sobrenome,);
console.log(" os cpf são:", lista_cpf,);
console.log(" As cidades são:", lista_cidade,);