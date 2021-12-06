// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS
// RESPOSTAS:
//
// 1. Na primeira linha de código do console aparecerá 10 e na segunda 10 5
//
// 2. Será impresso no console 10 10 10, porém como o c não possui um (let, var ou const), ele é visto como uma variável global (window.c), o que pode trazer problemas
// no fututo do código
// 
// 3. Eu usaria horasDia e ganhoDia para substituir as variáveis p e t 


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
let nomeEx
let idadeEx

console.log(typeof nomeEx , typeof idadeEx)

// "undefined undefined" - Este tipo aparece porque a variável não foi definida

nomeEx = prompt("Qual seu nome?")
idadeEx = prompt("Qual sua idade?")

console.log("Nome:" , nomeEx , "Tipo:" , typeof nomeEx , "|" , "Idade:" , idadeEx , "Tipo:" , typeof idadeEx)

// "string string" - As variáveis se tornaram strings depois do usuário colocar suas respostas

console.log("Olá" , nomeEx + ", você tem" , idadeEx , "anos!")

//2.
let jantaEx = prompt("Você já jantou hoje?")
console.log("Você já jantou hoje? -" , jantaEx)

let bomEx = prompt("Estava bom?")
console.log("Estava bom? -" , bomEx)

let aguaEx = prompt("Bebeu água?")
console.log("Bebeu água? -" , aguaEx)

//3.
let a = 10
let b = 25

// console.log("O antigo valor de a era" , a)
// console.log("O antigo valor de b era" , b)

let c

c = a
a = b
b = c

console.log("O novo valor de a é" , a)
console.log("O novo valor de b é" , b)

// DESAFIO OPCIONAL

let primeiroNum = prompt ("Diga um número!")
let segundoNum = prompt ("Diga o segundo número!")

primeiroNum = Number(primeiroNum)
segundoNum = Number(segundoNum)

// console.log("Primeiro número:" , primeiroNum , typeof primeiroNum , "|" , "Segundo número:" , segundoNum , typeof segundoNum)

const x = primeiroNum+segundoNum
const y = primeiroNum*segundoNum

console.log(primeiroNum , "somado por" , segundoNum , "=" , x)
console.log(primeiroNum , "multiplicado por" , segundoNum , "=" , y)