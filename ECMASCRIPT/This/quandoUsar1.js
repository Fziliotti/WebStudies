<style>
  button { background-color: blue; }
  .on { background-color: red; }
</style>
<button id="click_here">CLIQUE AQUI!</button>


const button = document.querySelector('#click_here');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
// Se você testar esse botão, vai gerar o erro “TypeError, cannot
// read property 'toggle' of undefined“.

// Isso ocorre pois a referência do this em this.classList.toggle('on')
// compartilha os atributos do objeto window do browser, e não do evento.
// E com isso, nesse caso o ideal é utilizar a declaração de function:


// TEM QUE SER ASSIM
const button = document.querySelector('#click_here');
button.addEventListener('click', function() {
  this.classList.toggle('on');
});