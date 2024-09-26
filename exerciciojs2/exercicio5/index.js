let nomes = [];

function adicionarNome(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém o valor do input
    const nomeInput = document.getElementById('nome').value;

    // Adiciona o nome ao array
    nomes.push(nomeInput);

    // Atualiza o conteúdo do parágrafo
    document.getElementById('lista').innerHTML = 'Sua lista de nomes: <br>' + nomes.join(', ');

    // Limpa o campo de entrada
    document.getElementById('nome').value = '';
}
