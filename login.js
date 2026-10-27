function entrar() {

let usuario = document.querySelector ('#usuario')
let labelUsuario = document.querySelector ('#labelUsuario')

let senha = document.querySelector ('#senha')
let labelSenha = document.querySelector ('#labelSenha')

let senhaCriptografada = CriptJS.SHA512(senha.value).toString();

let listaUsuario = []

let usuarioValid = {
    usuario: '',
    senha: ''
}

listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

listaUsuario.forEach((item) => {
    if(usuario.value == usuarioValid.usuario && senhaCriptografada == item.senhaCad){

    usuarioValid = {
        usuario: item.usuarioCad,
        senha: item.senhaCad
    }
}
})

if(usuario.value == usuarioValid.usuario && senhaCriptografada == usuarioValid.senha){
    window.location.href = '..login.html'

    localStorage.setItem('token', token)
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValid))
    }
}