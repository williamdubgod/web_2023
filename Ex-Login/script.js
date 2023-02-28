function logar() {
    let usuario = document.querySelector("#user")
    let senha = document.querySelector("#senha")

    if(senha.value != '12345') {
        alert('usuário ou senha inválidos')
    } else {
        alert(`Seja bem-vindo ${usuario.value}`)
    }
}

function enviar() {
    let nome = document.getElementById("nomeId");
    let telefone = document.getElementById("telefoneId");
    let email = document.getElementById("emaiId");

    if(nome.value !=="" | telefone.value !=="" | email.value !=="") {
        alert(`Senhor(a) ${nome.value}, entraremos em contato pelo telefone: ${telefone.value} ou pelo E-Mail: ${email.value}, obrigado pela preferência!`);
    }

}
