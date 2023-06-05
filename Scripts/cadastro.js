
function validarCadastro() {
    var inputs = document.getElementsByClassName('input-cadastro');

    // Remover todas as classes "vermelho" dos inputs
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('vermelho');
    }

    var camposVazios = false;

    // Verificar se há campos vazios
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].classList.add('vermelho');
            camposVazios = true;
        }
    }

    if (camposVazios) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Resto da lógica para enviar o formulário ou realizar outras ações
    // ...
}
