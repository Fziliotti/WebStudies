function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => {
                    form.reset();
                    mostrarResposta(data);
                })
                .catch(erro => console.error(erro));
        }
    }
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep}, <br>
        Logradouro: ${cep.logradouro},  <br>
        Complemento: ${cep.complemento},  <br>
        Bairro: ${cep.bairro},  <br>
        Cidade ${cep.cidade},  <br>
        Estado: ${cep.estado}
    `;

    result = document.querySelector('.result__text');
    result.innerHTML = mensagem;

}