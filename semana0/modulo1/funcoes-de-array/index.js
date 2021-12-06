// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 
// 1. Será impresso o objeto usuarios, sem alteração.
// 2. Será impresso o objeto usuarios com apenas as informações da chave "nome", como inserido na variável novoArrayB
// 3. Serão impressas todas as informações do objeto usuarios exceto o objeto que apresenta "Chijo" em sua chave apelido

// EXERCÍCIOS DE ESCRITA DE CÓDIGOS
//
// 1. 
{
// a.
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]
     const nomesPets = pets.map((item) =>{
         return item.nome
     })
     console.log('1. a. Nomes:', nomesPets)
// b.
     const salsichas = pets.filter((item)=> {
         return item.raca.toLowerCase() === "salsicha"
     })
     console.log('1. b. Salsichas:' , salsichas)
// c.
     const poodles = pets.filter((item)=>{
         return item.raca.toLowerCase() === "poodle"
     })
     const poodlesNomes = poodles.map((item) =>{
         return item.nome
     })
     const imprimirDesconto =(array)=>{
       for(let i=0;i<array.length;i++){
           console.log(`1. c. Você ganhou um cupom de desconto de 10% para tosar o/a ${array[i]}!`)
       }  
     }
     imprimirDesconto(poodlesNomes)
}

// 2.
{
// a.
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
    const nomesProdutos = produtos.map((item)=>{
        return item.nome
    })
    console.log('2. a.', nomesProdutos)
// b.
    const nomesPrecos = produtos.map(item => ({
        nome: item.nome , preco:(item.preco -(item.preco * 5/100)).toFixed(2)
    }))
    console.log('2. b.', nomesPrecos)
// c.
    const bebidas = produtos.filter((item) =>{
       return item.categoria.toLowerCase() === "bebidas"
    })
    console.log('2. c.', bebidas)
// d.
    const ype = produtos.filter((item) =>{
        if(item.nome.toLowerCase().includes("ypê")){
            return item.nome
        }
    })
    console.log('2. d.', ype)
// e.
    const ypePreco = ype.map(item =>({
        nome: item.nome , preco: item.preco
    }))
    const imprimirString = (array)=>{
        for(let i=0; i < array.length; i++){
            console.log(`2. e. Compre: ${array[i].nome} por R$:${array[i].preco}!`)
        }
    }
    imprimirString(ypePreco)
}

// DESAFIOS
// 
// 1.
{
// a.
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]
    const nomePkm = pokemons.map((item)=>{
        return item.nome
    })
    nomePkm.sort()
    console.log('Desafio 1.', nomePkm)
// b.
    const tiposPkm = pokemons.map((item)=>{
        return item.tipo
    })
    const tiposSeparados = tiposPkm.filter((item, pos, array)=>{
        return array.indexOf(item) == pos
    })    
    console.log('Desafio 2.', tiposSeparados)
}