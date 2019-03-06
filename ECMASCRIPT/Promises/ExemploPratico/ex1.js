// Piramide de funcoes antigamente

doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
      doThirdThing(newResult, function(finalResult) {
        console.log('Got the final result: ' + finalResult);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);


// Os argumentos para then são opcionais, e catch(failureCallback) é uma abreviação 
// para then(null, failureCallback). Você pode também pode ver isso escrito com arrow functions
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
         console.log(`Got the final result: ${finalResult}`);})
    .catch(failureCallback);

// hOJE
async function foo() {
    try {
      const result = await doSomething();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
      failureCallback(error);
    }
  }


//   ex! - If saySomething fails or contains a programming error, nothing catches it.
setTimeout(() => saySomething("10 seconds passed"), 10000);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);