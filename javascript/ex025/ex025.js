var cadastro = []

cadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (cadastro == null) {
    cadastro = []
}

exibirUsuarios()
console.log(cadastro)

function botaoCadastrar() {
    var nome = document.getElementById('nome').value
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var confirmarSenha = document.getElementById('confirmarSenha').value

    if (senha == confirmarSenha) {
        var usuario = {
            nome: nome,
            usuario: login,
            senha: senha
        }
        cadastro.push(usuario)
        localStorage.setItem(`bdcadastro`, JSON.stringify(cadastro))

        exibirUsuarios()

        document.getElementById("nome").value = ''
        document.getElementById("login").value = ''
        document.getElementById("senha").value = ''
        document.getElementById("confirmarSenha").value = ''
        document.getElementById("nome").focus()
        console.log(``)
    }
    else {
        alert(`As senhas não conferem`)
        return
    }
}

function validarCadastro(nome, login) {
    if (nome != '' && login != '') {
        return true
    } else {
        return false
    }
}

function exibirUsuarios() {
    document.getElementById('resultado').innerHTML = ''

    cadastro.forEach ((item, indice) => {
        document.getElementById('resultado').innerHTML +=
        `<div>
        <b>Nome:</b> ${item.nome} - <b>login:</b> ${item.usuario}
        <img src='excluir.svg' class='excluir' onclick = 'excluirUsuario(${indice})'
        </div> <br>`
    } )

  function excluirUsuario(indice) {
    cadastro.splice (indice, 1)
    localStorage.setItem(`bdcadastro`, JSON.stringify(cadastro))
    cadastro()
  }
}

function Entrar() {
    var usuario = document.getElementById("usuarioLogin").value
    var senha = document.getElementById("senhaLogin").value

    var encontrou = false
    cadastro.forEach ( item => {
        if (usuario == item.usuario && senha == item.senha) {
            alert(`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    } )

    if (encontrou == false) {
        alert('Usuario não encontrado')
    }
}

function loginCadastrar() {
    location.href = "ex025-cadastro.html"
}