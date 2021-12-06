/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

{
   //SOMA VALORES CARTAS
   const somarValores= (array)=>{
      let soma = 0
      for(let i=0;i<array.length;i++){
         soma=soma+array[i]
      }
      return soma
   }
   //TRANSFORMA CARTAS EM STRING
   const concatenarCartas = (array)=> {
      let cartas = []
      for(let i=0;i<array.length;i++){
      cartas.push(array[i])
      }
      let cartasString = cartas.join(" ")
      return cartasString
  }
  //CHECAGEM DE AA
  const checagemCartas = (arrayJog, arrayComp)=>{
     let semAA = false
        if((arrayJog[0] === 11 && arrayJog[1] === 11)||(arrayComp[0] === 11 && arrayComp[1] === 11)){
            semAA = false
            return semAA           
        }else{
            semAA = true
            return semAA
        }
  }
  //CHECAGEM 21
  const checar21 = (array)=>{
     let checagemMais21 = false
     if(somarValores(array) > 21){
        checagemMais21 = true
        return checagemMais21
     }else
     if(somarValores(array) <= 21){
        checagemMais21 = false
        return checagemMais21
     }
  }
   //INICIO
   if(confirm("DESAFIO:\nBoas vindas ao jogo de Blackjack!\nQuer começar a jogar:")){
      
      //FASE DE COMPRAS INICIAL
      //JOGADOR
      //COMPRA 2 CARTAS
      let comprarJogador = []
      for(let i=0;i<2;i++){
         comprarJogador.push(comprarCarta())
      }
      // console.log(comprarJogador)
      let valorJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.valor}) 
      let cartasJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.texto})

         //COMPUTADOR
         //COMPRA 2 CARTAS
         let comprarComputador = []
         for(let i=0;i<2;i++){
            comprarComputador.push(comprarCarta())
         }
         let valorComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.valor})
         let cartasComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.texto})


      //FIM FASE DE COMPRAS INICIAL
      //CHECA SE COMPROU AA
      switch(checagemCartas(valorJogador,valorComputador)){
         case false:
            alert(`Algum jogador comprou 2 A's! Favor, tente novamente.`)
         //CONTINUAR COMPRAS JOGADOR
         case true:
            let continuarCompra=false
            let perguntar = true
            while(perguntar){
               perguntar = continuarCompra = confirm(`Suas cartas são ${concatenarCartas(cartasJogador)}, totalizando ${somarValores(valorJogador)}.`
               +`\nA carta revelada do computador é ${cartasComputador[0]}.`
               +`\nGostaria de comprar outra carta?`)
               while(continuarCompra){
                  cartasJogador.push(comprarCarta().texto)
                  valorJogador.push(comprarCarta().valor)
                  continuarCompra = false
                  if(checar21(valorJogador)===true){
                     alert(`Estourou!! Você fez mais de 21 pontos. Tente novamente.`
                     +`\nSua pontuação: ${somarValores(valorJogador)}.`
                     +`\nPontuação do computador: ${somarValores(valorComputador)}.`)
                     perguntar = continuarCompra = false
                  }
               }
            }
            // COMPRA COMPUTADOR 
            if(checar21(valorJogador)===false){
               while(somarValores(valorComputador) < 18){
                  cartasComputador.push(comprarCarta().texto)
                  valorComputador.push(comprarCarta().valor)
               }
               if(checar21(valorComputador)===true){
                  alert(`O computador estourou!! Parabéns, você venceu!`
                     +`\nSua pontuação: ${somarValores(valorJogador)}.`
                     +`\nPontuação do computador: ${somarValores(valorComputador)}.`)
               }
            }
            //CHECAGEM DE VENCEDOR
            if(!checar21(valorComputador) && !checar21(valorJogador)){
               let valorTotalJog = somarValores(valorJogador)
               let valorTotalComp = somarValores(valorComputador)
               if(valorTotalComp > valorTotalJog){
                  alert(`O computador venceu!! Tente novamente!`
                        +`\nJogador - Cartas: ${concatenarCartas(cartasJogador)} - Valor: ${somarValores(valorJogador)}`
                        +`\nComputador - Cartas: ${concatenarCartas(cartasComputador)} - Valor: ${somarValores(valorComputador)}`)
               }else
               if(valorTotalComp < valorTotalJog){
                  alert(`Você venceu!! Parabéns!`
                        +`\nJogador - Cartas: ${concatenarCartas(cartasJogador)} - Valor: ${somarValores(valorJogador)}`
                        +`\nComputador - Cartas: ${concatenarCartas(cartasComputador)} - Valor: ${somarValores(valorComputador)}`)
               }else
               if(valorTotalComp === valorTotalJog){
                  alert(`Houve um empate!! Tente novamente!`
                        +`\nJogador - Cartas: ${concatenarCartas(cartasJogador)} - Valor: ${somarValores(valorJogador)}`
                        +`\nComputador - Cartas: ${concatenarCartas(cartasComputador)} - Valor: ${somarValores(valorComputador)}`)
               }
            }
      }
   }else{
   alert("O jogo acabou!")
   }
}  