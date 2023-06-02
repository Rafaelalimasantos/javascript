// Declarando uma função sem parametro e sem retorno
function exibirInformacao() {
    console.log('Executei a função exibir info')
}
// Chamando a minha função
exibirInformacao()

//Função com entrada de parâmetro e sem retorno (sem saida de dados)
//Criando a função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr) {
    for (var i = 0; i <= 20; i++) {
        console.log(`${nr} X ${i} = ${nr * i}`)
    }
}
//Chamando a funçãoe passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(428)

function ricardoCalculeDobro(nr) {
    let dobro = nr * 2
    return dobro
}


//Chamando função para calcular o dobro e receber o resultado na variavel
var resultado = ricardoCalculeDobro(7)
console.log(resultado)
var resultado = ricardoCalculeDobro(738374)
console.log(resultado)

//Calcular media enviando 2 parametros e retornando a media
function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var aluno1 = calcularMedia(7, 8)
console.log(aluno1)
var aluno2 = calcularMedia(5, 6)
console.log(aluno2)

var user = "adm"
var senha = 123
var possoAcessar = validarLogin(login, senha)
if(possoAcessar == true)
{
    console.log("Você pode acessar o sistema")
}else 
{
    console.log("Você não tem permissão")
}


function validarLogin(login, senha)
{
    //valida se os valores são vazios
    if (login == '' || senha == '') 
    {
        return false
    }
    //Valida se login e senha são iguais
    if(login == "adm" && senha == 123)
    {
        return true
    }
    else
    {
        return false
    }
}


