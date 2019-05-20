// RESOLUCAO
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// wait(1000)
//     .then(() => teste())
//     .catch( ()=> console.log('deu problema'));

var promise = new Promise((res, rej) => {
  try {
    setsTimeout(res, 1000);
  } catch (err) {
    rej("deu erro!");
  }
});

promise
  .then(() => console.log("rodou a função"))
  .catch(() => console.log("deu erro na promise"));
