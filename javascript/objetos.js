var listaCarros = []

//Declarando um objeto e informando os atributos
//todo objeto declaro com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}

//para exibir o atributo do objeto faça da seguinte forma 
//objeto.atributo 
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)

console.log (listaCarros.length) // 1 - só existe um item

//Novo objeto
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}
//Adicionando novo objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log (listaCarros)
//Exibindo uma lista apenas com o modelo do carro
for (var pos in listaCarros) {
    //Acessando o indice do vetor e o atributo modelo
    console.log (listaCarros[pos].modelo)
}