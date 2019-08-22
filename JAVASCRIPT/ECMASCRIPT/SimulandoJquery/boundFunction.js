
        let $ = document.querySelector.bind(document); //é uma bound function, pois está ligada a um contexto
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');