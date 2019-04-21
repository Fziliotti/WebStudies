var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;
  var log = document.getElementById('log');
  var log2 = document.getElementById('log2');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (<small>Sync code started</small>)<br/>');

  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
  var p1 = new Promise(
    // a função resolve() é chamada com a capacidade para resolver ou 
    // rejeitar a promise
    function (resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise started (<small>Async code started</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function () {
          // Cumprimos a promessa !
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // definimos o que fazer quando a promise for realizada
  p1.then(
    // apenas logamos a mensagem e o valor
    function (val) {
      log2.insertAdjacentHTML('beforeend', val +
        ') Promise fulfilled (<small style="background: green">Async code terminated</small>)<br/>');
    });


  p1.catch(err => {
      log.insertAdjacentHTML('beforeend', err);
    });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Promise made (<small">Sync code terminated</small>)<br/>');
  }

  // VERIFICA SE O BROWSER SUPORTA PROMISES
  if ("Promise" in window) {
    btn = document.getElementById("btn");
    btn.addEventListener("click", testPromise);
  } else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
  }