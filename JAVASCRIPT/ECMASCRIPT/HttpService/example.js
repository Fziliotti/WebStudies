export class HttpService {

  _handleErrors(res) {
      if(!res.ok) throw new Error(res.statusText);
      return res;
  }

  get(url) {
      return fetch(url)
          .then(res => this._handleErrors(res))
          .then(res => res.json());
  }
  
  post(url, dado) {
      return fetch(url, {
          headers: { 'Content-type' : 'application/json'},
          method: 'post',
          body: JSON.stringify(dado)
      })
      .then(res => this._handleErrors(res));

  }
}


// USO DO SERVIÇO
/*
class NegociacaoService {
  
  constructor() {
      this._http = new HttpService();
  }
  
  obterNegociacoesDaSemana() {
     return new Promise((resolve, reject) => {
          this._http
              .get('negociacoes/semana')
              .then(negociacoes => {
                  console.log(negociacoes);
                  resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
              })
              .catch(erro => {
                  console.log(erro);
                  reject('Não foi possível obter as negociações da semana');
              });  
     });        
  }
*/

