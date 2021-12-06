// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//
// 1. Será impresso:
// Matheus Nachtergaele
// Virginia Cavendish
// Um objeto com as informações= canal: Globo horario: 14h
//
// 2. a. Imprime 3 objetos com as informaçõe:
// nome: Juca idade: 3 raca: SRD
// nome: Juba idade: 3 raca: SRD
// nome: Jubo idade: 3 raca: SRD
//
// b. É um espalhamento, onde podemos copiar um objeto inteiro para outro, mudando suas informações e/ou adicionando mais informações
//
// 3. a. Será impresso no console "false" e "undefined"
// 
// b. Backender foi definido como "false" no objeto e nada foi definido para altura, por isso retorna "undefined"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1. a.
{
    const pessoa = {
        nome: "Lucas",
        apelidos: ["Lucão","Lusgão","Voz do trovão"]
    }
    const imprimir= objeto => {
        console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
    }
// b.
    imprimir(pessoa)

    const pessoa2 = {
        ...pessoa,
        apelidos: ["Cassio","Lhama","Risoto"]
    }
    imprimir(pessoa2)
}

// 2. a.
{
    const individuo = {
        nome: "Marcelo",
        idade: 43,
        profissão: "marceneiro"
    }
    const individuo2 = {
        nome: "Pedro",
        idade: 29,
        profissão: "pedreiro"
    }
// b.
    const informacoes = object => {
        return [object.nome, object.nome.length, object.idade, object.profissão, object.profissão.length]
    }
    console.log(informacoes(individuo))
    console.log(informacoes(individuo2))
}

// 3. a.
{
    const carrrinho = []
// b.
    const maca= {
        nome: "Maçã",
        disponibilidade: true
    }
    const pera= {
        nome: "Pera",
        disponibilidade: true
    }
    const banana= {
        nome: "Banana",
        disponibilidade: true
    }
// c.
    const adicionarCarrinho = obje => {
        carrrinho.push(obje)
        return carrrinho
    }
    adicionarCarrinho(maca)
    adicionarCarrinho(pera)
    adicionarCarrinho(banana)
// d.
    console.log(carrrinho)
}

// DESAFIOS
//
// 1.
{
    const info = (nome, idade, profissao) =>{
        nome = prompt("Qual seu nome:")
        idade = Number(prompt("Qual sua idade:"))
        profissao = prompt("Qual sua profissão:")

        const ob ={
            nome: nome,
            idade: idade,
            profissao: profissao
        }
        console.log(ob)
        console.log(typeof ob)
    }
    info()
}
// 2.
{
    const dino = {
        nome: "Parque dos Dinossauros",
        lancamento: 1993
    }

    const jack = {
        nome: "O Estranho Mundo de Jack",
        lancamento: 1993 
    }
    const comparar = (filme1,filme2)=>{
        const antes = filme1.lancamento < filme2.lancamento
        const mesmo = filme1.lancamento === filme2.lancamento
        console.log(`O primeiro filme foi lançado antes do segundo? ${antes}`)
        console.log(`O segundo filme foi lançado no mesmo ano do segundo? ${mesmo}`)
    }
    comparar(dino,jack)
}
// 3.
{
    const carrrinho = []

    const maca= {
        nome: "Maçã",
        disponibilidade: true
    }
    const pera= {
        nome: "Pera",
        disponibilidade: true
    }
    const banana= {
        nome: "Banana",
        disponibilidade: true
    }

    const adicionarCarrinho = obje => {
        carrrinho.push(obje)
        return carrrinho
    }
    adicionarCarrinho(maca)
    adicionarCarrinho(pera)
    adicionarCarrinho(banana)

    const tirarDisponibilidade = fruta =>{
        const dispNeg = !fruta.disponibilidade
        fruta.disponibilidade = dispNeg
        return carrrinho
    }
    console.log(tirarDisponibilidade(pera))
}