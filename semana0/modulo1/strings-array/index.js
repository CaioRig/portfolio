// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//
//1. a. undefined - porque nada foi definido na array
// b. null - porque a array foi definida como null
// c. 11 - porque .lenght imprime o número de caracteries
// d. 3 - porque o primeiro item da array foi definido como 3
// e. 1=19 - porque ele troca o segundo item da array pelo número 19
// f. 9 - porque ele imprime o item que está no sétimo lugar da array
//
// 2. SUBI NUM ÔNIBUS EM MIRROCOS - ele troca todas as letras "A" por "I"

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
{
    let emailDoUsuario=prompt("Digite seu e-mail:")
    let nomeDoUsuario=prompt("Digite um nome de usuário:")

    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}.`)
}
// 2.
// a.
{
    let comidas=["Lasanha","Virado de banana","Pizza","Pernil vegano","Tapioca"]
    console.log(comidas)
}
// b.
{
    let comidas=["Lasanha","Virado de banana","Pizza","Pernil vegano","Tapioca"]
    console.log("Estas são minhas comidas preferidas:","\n"+comidas[0]+"\n"+comidas[1]+"\n"+comidas[2]+"\n"+comidas[3]+"\n"+comidas[4])
}
// c.
{
    let comidas=["Lasanha","Virado de banana","Pizza","Pernil vegano","Tapioca"]
    let comidaUsuario=prompt("Qual a sua comida preferida?")
    comidas[1]=comidaUsuario

    console.log(comidas)
}
// 3.
{
    let listaDeTarefas=[]
    let tarefa1=prompt("Digite sua primeira tarefa:")
    let tarefa2=prompt("Digite sua segunda tarefa:")
    let tarefa3=prompt("Digite sua terceira tarefa:")

    listaDeTarefas=[tarefa1,tarefa2,tarefa3]
    console.log(listaDeTarefas)

    let realizada=Number(prompt("Digite de 1 a 3 qual tarefa você já realizou:"))
    listaDeTarefas.splice(realizada-1,1)

    console.log(listaDeTarefas)
}

// DESAFIOS
// 1.
{
    let frase=prompt("Digite sua frase:")
    let array=frase.split(" ")

    console.log(array)
}
2.
{
    let array=["Banana","Morango","Abacaxi","Laranja","Ameixa"]
    let indice= array.indexOf("Abacaxi")
    let tamanho= array[indice].length
    console.log(`Abacaxi está no índice ${indice} e tem ${tamanho} letras.`)
}