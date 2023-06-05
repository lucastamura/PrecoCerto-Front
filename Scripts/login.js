// script.js

// Variável global para armazenar as credenciais de acesso
var credenciais = {
    usuario: 'admin',
    senha: 'admin'
};

function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === '' || senha === '') {
        alert("Por favor, preencha todos os campos");
        return false;
    }

    if (usuario === credenciais.usuario && senha === credenciais.senha) {
        console.log("Acesso autorizado");
        return true;
    } else {
        alert("Usuário ou senha inválidos");
        return false;
    }
}
