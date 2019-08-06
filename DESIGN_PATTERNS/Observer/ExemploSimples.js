// definimos a classe
class Observable {
  // cada instância da classe Observer
  // começa com um array vazio de observadores/observers
  // que reagem a uma mudança de estado
  constructor() {
    this.observers = [];
  }

  // adicione a capacidade de inscrever um novo objeto / Elemento DOM
  // essencialmente, adicione algo ao array de observadores
  subscribe(f) {
    this.observers.push(f);
  }

  // adicione a capacidade de cancelar a inscrição de um objeto em particular
  // essencilamente, remove algum item do array de observadores
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // atualiza todos os objetos inscritos / Elementos DOM
  // e passa alguns dados para cada um deles
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}


// EXEMPLO DE USO:

// algumas referências a elementos DOM
const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

// algumas ações para adicionar ao array de observadores
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instanciando uma nova classe Observer
const headingsObserver = new Observable();

// criando inscrição para os observadores
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

// notificando todos os observadores sobre os novos dados baseado no evento selecionado
input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});