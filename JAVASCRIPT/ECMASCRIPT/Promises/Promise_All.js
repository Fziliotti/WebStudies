class NegociacaoService {

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        //associada ao then 
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        // Associado ao catch
                        reject('Não foi possível obter as negociações da semana');
                    }
                }
            };
            xhr.send();

        });
    }
}



importaNegociacoes() {

    let service = new NegociacaoService();

    //obterNegociacoesDaSemana retorna uma promise que internamente terá o resolve e reject
    service.obterNegociacoesDaSemana()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

    //obterNegociacoesDaSemanaAnterior retorna uma promise que internamente terá o resolve e reject
    service.obterNegociacoesDaSemanaAnterior()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

    //obterNegociacoesDaSemanaRetrasada retorna uma promise que internamente terá o resolve e reject
    service.obterNegociacoesDaSemanaRetrasada()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

}





// PODE SER RESOLVIDO MAIS FACILMENTE COM PROMISE ALL

importaNegociacoes() {

    let service = new NegociacaoService();


    Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

}