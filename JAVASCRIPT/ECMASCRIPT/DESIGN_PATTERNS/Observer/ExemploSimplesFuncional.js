let observers = [], data;


const subscribe = f => observers.push(f);
const unsubscribe = f => observers = observers.filter(o => o !== f);
const notify = () => observers.forEach(o => o(data));

for (let i = 1; i <= document.getElementsByClassName('js-paragraph').length; i++) {
  let update = text => document.querySelector(`.js-p${i}`).textContent = text;

  subscribe(update);

  document.querySelector(`.js-subscribe-p${i}`).addEventListener('click', function() {
    subscribe(update)
    notify();
  });

  document.querySelector(`.js-unsubscribe-p${i}`).addEventListener('click', function() {
    unsubscribe(update)
  });
  }

  document.querySelector('.js-input').addEventListener('keyup', function(e) {
    data = e.target.value;
    notify();
  });

// https://jsfiddle.net/oshj2a8x/3/
