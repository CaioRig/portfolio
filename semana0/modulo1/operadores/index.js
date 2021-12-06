// EXERCÍCIOS DE INTERPRETAÇAO DE CÓDIGO
//
// 1.
// a. false --- true && false = false
// b. false --- true && false && true = false
// c. true --- true && (true) = true
// d. boolean --- boolean é o tipo de variável que possue "true/false"
//
// 2. Seu código dará uma junção de strings no console, não de números, resultado diferente do que ele gostaria. 
//
// 3. Uma forma de consertar isto seria:
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// O que fará com que o console reconheça os números e traga a soma correta.
//

// EXERCÍCIO DE ESCRITA DE CÓDIGO
//
// 1.
{
let idade = Number(prompt("Qual sua idade?"))
let idadeAmigue = Number(prompt("Qual a idade de sue melhor amigue?"))

console.log("Sua idade é maior que de sue melhor amigue?" , idade > idadeAmigue)
console.log(idade - idadeAmigue)
}

// 2.
{
let par = Number(prompt("Insira um número par:"))
console.log(par % 2)
// Números pares divididos por 2 sempre darão resto = 0, pois números pares sempre são divisíveis por 2
// Números ímpares divididos por 2 sempre darão resto = 1
}

// 3.
{
let idade = Number(prompt("Quantos anos você tem?"))
const idadeMes = idade * 12
const idadeDias = idadeMes * 30
const idadeHoras = idadeDias * 24

console.log("Você tem" , idadeMes , "meses de vida.")
console.log("Você tem aproximadamente" , idadeDias , "dias de vida.")
console.log("Você tem aproximadamente" , idadeHoras , "horas de vida.")
}

// 4.
{
let primeiroN = Number(prompt("Insira o primeiro número:"))
let segundoN = Number(prompt("Insira o segundo número:")) 

const divPS = primeiroN % segundoN
const divSP = segundoN % primeiroN

console.log("O primeiro número é maior que o segundo?" , primeiroN > segundoN)
console.log("O primeiro número é igual ao segundo?" , primeiroN === segundoN)
console.log("O primero número é divisível pelo segundo?" , divPS === 0)
console.log("O segundo número é divisível pelo primeiro?" , divSP === 0)

// Neste exemplo utilizei o número 100 como sendo o primeiro e o -100 como sendo o segundo para atingir os seguintes termos:
// O primeiro numero é maior que segundo? - true
// O primeiro numero é igual ao segundo? - false
// O primeiro numero é divisível pelo segundo? - true
// O segundo numero é divisível pelo primeiro? - true

}

// DESAFIOS
//
// 1.
{
// celsius = 1 = fahrenheit = 274.15 = kelvin = 33.8
//let fahrenheit = (celsius)*(9/5) + 32
//let kelvin = (fahrenheit - 32)*(5/9) + 273.15

{
let kelvin = (77 - 32)*(5/9) + 273.15
console.log("77ºF em K =" , kelvin)
}
{
let fahrenheit = (80)*(9/5) + 32
console.log("80ºC em F =" , fahrenheit)
}
{
let celsius = 30
let fahrenheit = (celsius)*(9/5) + 32
let kelvin = (fahrenheit - 32)*(5/9) + 273.15

console.log("30ºC em F =" , fahrenheit)
console.log("30ºC em K =" , kelvin)
}
let celsius = Number(prompt("Quantos ºC você gostaria de converter?"))
let fahrenheit = (celsius)*(9/5) + 32
let kelvin = (fahrenheit - 32)*(5/9) + 273.15

console.log(celsius + "ºC em F =" , fahrenheit)
console.log(celsius + "ºC em K =" , kelvin)
}

// 2.
{
{
let quiH = 0.05
let quiHoras = 280
    
const quiCust = quiHoras * quiH
    
console.log("Consumindo 280 quilowatts-hora, você deve pagar: R$" + quiCust) 
}
{
let quiH = 0.05
let quiHoras = 280

const quiCust = quiHoras * quiH
const quiDesc = quiCust * 0.15

console.log("Com desconto de 15% você deve pagar: R$" + (quiCust - quiDesc))
}
// {
//     let quiH = 0.05
//     let quiHoras = Number(prompt("Quantos quilowatt-hora você consumiu este mês?"))
    
//     const quiCust = quiHoras * quiH
//     const quiDesc = quiCust * 0.15
    
//     console.log("Com desconto de 15%, você deve pagar: R$" + (quiCust - quiDesc))
//     }
}

// 3.
// a.
{
    //let lb = Number(prompt("Quantos lb você gostaria de converter em kg?"))
    //let kg = Number(lb / 2.205)
    //console.log(lb + "lb equivalem a" , kg + "kg.")
    
    let lb = 20
    let kg = Number(lb / 2.205)
    console.log(lb + "lb equivalem aproximadamente a" , kg + "kg.")
}
//
//b.
{
    //let oz = Number(prompt("Quantos oz você gostaria de converter em kg?"))
    //let kg = Number(oz / 35.274)
    //console.log(oz + "oz equivalem a" , kg + "kg.")

    let oz = 10.5
    let kg = Number(oz / 35.274)
    console.log(oz + "oz equivalem aproximadamente a" , kg + "kg.")
}
// c.
{
    //let mi = Number(prompt("Quantos mi você gostaria de converter para m?"))
    //let m = Number(mi * 1609.344)
    //console.log(mi + "mi equivalem aproximadamente a" , m + "m.")

    let mi = 100
    let m = Number(mi * 1609.344)
    console.log(mi + "mi equivalem aproximadamente a" , m + "m.")
}
// d.
{
    // let ft = Number(prompt("Quantos ft você gostaria de converter para m?"))
    // let m = Number(ft / 3.281)
    // console.log(ft + "ft equivalem aproximadamente a" , m + "m.")

    let ft = 50
    let m = Number(ft / 3.281)
    console.log(ft + "ft equivalem aproximadamente a" , m + "m.")
}
// e.
{
    // let gal = Number(prompt("Quantos gal você gostaria de converter para l?"))
    // let l = Number(gal * 3.785)
    // console.log(gal + "gal equivalem aproximadamente a" , l + "l.")

    let gal = 103.56
    let l = Number(gal * 3.785)
    console.log(gal + "gal equivalem aproximadamente a" , l + "l.")
}
// f.
{
    // let xic = Number(prompt("Quantas xic você gostaria de converter para l?"))
    // let l = Number(xic * 0.24)
    // console.log(xic + "xic equivalem aproximadamente a" , l + "l.")

    let xic = 450
    let l = Number(xic * 0.24)
    console.log(xic + "xic equivalem aproximadamente a" , l + "l.")
}