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

   console.log("Boas vindas ao jogo de Blackjack!")
   if(confirm("Quer começar a jogar:")){
      //JOGADOR
      let comprarJogador = []
      for(let i=0;i<2;i++){
         comprarJogador.push(comprarCarta())
      }
      // console.log(comprarJogador)
      const valorJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.valor}) 
      const cartasJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.texto})

         const valorTotalJog = somarValores(valorJogador)
         console.log('Usuário - Cartas:',concatenarCartas(cartasJogador), `Valor: ${valorTotalJog}`)

         // COMPUTADOR
         let comprarComputador = []
         for(let i=0;i<2;i++){
            comprarComputador.push(comprarCarta())
         }
      // console.log(comprarComputador)
         const valorComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.valor}) 
         const cartasComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.texto})

         const valorTotalComp = somarValores(valorComputador)
         console.log('Computador - Cartas:',concatenarCartas(cartasComputador), `Valor: ${valorTotalComp}`)
         
         //CHECAGEM VENCEDOR
         if(valorTotalComp > valorTotalJog){
            console.log("O Computador venceu!!")
         }else
         if(valorTotalJog > valorTotalComp){
            console.log("O Jogador venceu!!")
         }else
         if(valorTotalComp === valorTotalJog){
            console.log("Houve um empate!!")
         }
   }
   else{
   console.log("O jogo acabou!")
   }
}

// criar loop jog e comp compram 2 cartas - add as cartas em um array - imprimir respectivas cartas e valores
// o jogador que tiver o maior valor ganha - valores iguais, empate