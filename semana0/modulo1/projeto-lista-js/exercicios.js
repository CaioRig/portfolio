// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura=Number(prompt("Qual a altura do retângulo?"))
  let largura=Number(prompt("Qual a largura do retângulo?"))
  const area= altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual=Number(prompt("Em que ano estamos?"))
  let anoNascimento=Number(prompt("Em que ano você nasceu?"))
  const idade=anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC=peso / (altura*altura)

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome= prompt("Qual seu nome?")
  let idade= prompt("Qual sua idade?")
  let email= prompt("Qual seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1= prompt("Qual sua cor favorita?")
  let cor2= prompt("Qual sua segunda cor favorita?")
  let cor3= prompt("Qual sua terceira cor favorita?")

  const cores= [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const upper= string.toUpperCase()

  return upper
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   const vendidos = (custo / valorIngresso)

  return vendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho =string1.length === string2.length

  return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoNumero= Number(array.length - 1)
  return array[ultimoNumero]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  arrayPrimeiro= array[0]
  arrayUltimo= array[array.length-1]

 array[array.length-1]= arrayPrimeiro
 array[0]= arrayUltimo

 return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1= string1.toLowerCase()
  string2= string2.toLowerCase()

  return (string1 === string2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual=Number(prompt("Em que ano estamos:"))
  let anoNascimento=Number(prompt("Em que ano você nasceu:"))
  let anoCarteira=Number(prompt("Qual ano sua carteira foi emitida?"))

  let idade= anoAtual-anoNascimento
  let idadeCarteira= anoAtual-anoCarteira

  let idade20= idade <= 20
  let idade50= (idade > 20) === (idade <= 50)
  let idade51= (idade>50)

  let renova20= idade20 && (idadeCarteira>=5)
  let renova50= idade50 && (idadeCarteira>=10)
  let renova51= idade51 && (idadeCarteira>=15)

  let renova = renova20 || renova50 || renova51
  console.log(renova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multi400= (ano % 400) === 0
  let multi4= (ano % 4) === 0
  let div100= (ano % 100) !== 0

  let bisexto= multi400 || (multi4 && div100)

  return bisexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  function result(texto){
    texto.toLowerCase()
    let positivo = texto === "sim"
    return positivo
  }
  
  let maior18=result(prompt("Você tem mais de 18 anos?"))
  let ensinoMedio= result(prompt("Você tem ensino médio completo?"))
  let disponibilidade=result(prompt("Você tem disponibilidade exclusiva durante os horários do curso?"))

  const aprovado = maior18 && ensinoMedio && disponibilidade

  console.log(aprovado)

}