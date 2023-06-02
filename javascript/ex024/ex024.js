var listaFilmes = []

//Buscando as informações dolocalStorage gravadas no navegador
//Utilizo o metodo getItem com o nome exatamente que utilizamos no steItem
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes == []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listaFilmes)

function validarCadastro(nomeFilme, imagemFilme){
    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}

function carregarFilmes(){
    document.getElementById('resultado').innerHTML = ''

    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <img src='${listaFilmes[i].link}' class='img'> 
                <p>${listaFilmes[i].nome}<p>
            <div>`
    }
}

function botaoFilmes() {
    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("imagem").value
    
   var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
   if (possoCadastrar == false) {
    alert ('Verifique os dados antes de cadastrar')
    return
   }

    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }
    listaFilmes.push(filme)
//Utilizando o localStorage que ira gravar o nosso vetor de filme
//no metodo setItem, preciso passar como parametro o nome do espaço
//que o navegador ira reservar e passo tambem o vetor de filmes
//convertido em formatos JSON
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )
    
    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado(){
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML = 
        `<div>
            <img src='${listaFilmes[nrSorteado].link}' class='img'> 
            <p>${listaFilmes[nrSorteado].nome}<p>
        </div>`
}

function exibirFilmes(){
    document.getElementById('resultado').innerHTML = ''

    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <img src='${listaFilmes[i].link}' class='img'> 
                <p>${listaFilmes[i].nome}<p>
            <div>`
    }
}

function botaoLimpar() {
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )
    exibirFilmes()
}