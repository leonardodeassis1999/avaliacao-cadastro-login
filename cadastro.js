function cadastrar (){
    if(validUsuario && validSenha){
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        let senhaCriptografada = CriptJS.SHA512(senha.value).toString();

        listaUsuario.push(
        {
            usuarioCad: usuario.value,
            senhaCad: senhaCriptografada
        }
        )

        localStorage.setItem('listaUsuario',JSON.stringify(listaUsuario))

        setTimeout(()=>{
            window.location.href = '..login.html'
        }, 3000)
    }
}