

const input = document.querySelector('.js-input');

const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

const subscribeP1 = document.querySelector('.js-subscribe-p1');
const subscribeP2 = document.querySelector('.js-subscribe-p2');
const subscribeP3 = document.querySelector('.js-subscribe-p3');

const unsubscribeP1 = document.querySelector('.js-unsubscribe-p1');
const unsubscribeP2 = document.querySelector('.js-unsubscribe-p2');
const unsubscribeP3 = document.querySelector('.js-unsubscribe-p3');

const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;


//classe com os elementos que serão vao ser inscritos e notificados se alguma alteracao ocorrer
const headingsObserver = new Observable();
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

subscribeP1.addEventListener('click', () => headingsObserver.subscribe(updateP1));
unsubscribeP1.addEventListener('click', () => headingsObserver.unsubscribe(updateP1));
subscribeP2.addEventListener('click', () => headingsObserver.subscribe(updateP2));
unsubscribeP2.addEventListener('click', () => headingsObserver.unsubscribe(updateP2));
subscribeP3.addEventListener('click', () => headingsObserver.subscribe(updateP3));
unsubscribeP3.addEventListener('click', () => headingsObserver.unsubscribe(updateP3));

input.addEventListener('keyup', e => {
    headingsObserver.notify(e.target.value);
});


