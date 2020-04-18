```js
// rootSaga.js
function* rootSaga() {
  yield [fork(loadUser), takeLatest("LOAD_DASHBOARD", loadDashboardSequenced)];
}
export default rootSaga;
```

## Redux Saga expõe vários métodos chamados de Effects, e vamos usar vários deles:

- fork(), realiza uma operação não bloqueante com a função passada
- take(), pausa as operações até receber uma redux action
- race(), executa Effects simultaneamente, e cancela todos quando um efeito retorna seu resultado
- call(), executa uma função. Se essa função retornar uma Promise, ele irá pausar a Saga até a Promise ser resolvida
- put(), despacha uma redux action
- select(), executa uma função seletora que irá buscar dados do estado global do Redux
- takeLatest(), irá executar as operações recebidas, porém, irá retornar apenas o valor da última. Se a mesma operação for enviada mais de uma vez, elas serão ignoradas, exceto a última (ex: click -> loadUser, usuário clica 4 vezes no botão (ele é legal né, quer testar sua app), apenas a função enviada no último click será executada/retornado o valor, as outras serão ignoradas)
- takeEvery(), irá retornar os valores de todas as operações recebidas

No exemplo acima, nós registramos duas sagas diferentes (loadUser, loadDashboardSequenced), mas, iremos cria-las depois. Analisando o exemplo, nós estamos usando fork e takeLatest, onde takeLatest irá aguardar por uma ação chamada “LOAD_DASHBOARD” ser despachada pelo Redux para ser executada. (mais sobre isso no item 3)

## 2. Injetando o middleware das Sagas na Redux Store
   Quando nós definimos nossa Redux Store, precisamos inicializar o middleware das Sagas:
   import createSagaMiddleware from 'redux-saga'
   import rootSaga from './rootSaga'
   const sagaMiddleware = createSagaMiddleware();
   const store = createStore(
   rootReducer,
   initialState,
   compose(
   applyMiddleware(sagaMiddleware)  
    );
   );
   sagaMiddleware.run(rootSaga);
## 3. Criando as Sagas
   Vamos definir a Saga para loadUser:

```js
function* loadUser() {
  try {
    // [1]
    const user = yield call(getUser);
    // [2]
    yield put({ type: "FETCH_USER_SUCCESS", payload: user });
  } catch (error) {
    // [3]
    yield put({ type: "FETCH_FAILED", error });
  }
}
```

Podemos ler o código acima dessa maneira:

- [1] Fazemos a chamada para a função getUser, e guardamos o resultado na variável user
- [2] Despachamos uma ação chamada FETCH_USER_SUCESS e passamos o valor user recebido na etapa anterior para ser consumido pelos reducers e guardado na store
- [3] Se algo der errado, despachamos uma ação chamada FETCH_FAILED que avisar nossa aplicação que algo deu errado (aqui podemos mostrar uma mensagem de erro, etc)
  Como você pode ver, a leitura é síncrona, mas as operações são assíncronas, só de poder usar yield e armazenar isso em uma variável, já vale a pena.
  Agora, vamos criar a próxima Saga:

```js
function* loadDashboardSequenced() {
  try {
    // [1]
    yield take(‘FETCH_USER_SUCCESS’);
// [2]
    const user = yield select(state => state.user);
    // [3]
    const departure = yield call(loadDeparture, user);
    // [4]
    const flight = yield call(loadFlight, departure.flightID);
    const forecast = yield call(loadForecast, departure.date);
// [5]
    yield put({
      type: ‘FETCH_DASHBOARD_SUCCESS’,
      payload: { forecast, flight, departure }
    });
  } catch (error) {
    // [6]
    yield put({
      type: ‘FETCH_FAILED’,
      error: error.message
    });
  }
}
```

Vamos ler da seguinte maneira:
- [1] Esperamos para que uma redux action chamada FECTH_USER_SUCCESS seja despachada. Esse yield ficará na espera até essa ação ocorrer (veja mais sobre Effects no item 1).
- [2] Selecionamos um valor da redux store. O efeito select recebe uma função que acessa a store. Nós armazenamos o resultado na constante user.
- [3] Em seguida, executamos uma operação assíncrona para carregar as informações do voo, e passamos o objeto user como parâmetro para o efeito call
- [4] Assim que a chamada assíncrona do loadDeparture for finalizada, nós executamos loadFlight com o objeto departure recebido na chamada anterior. O mesmo se aplica para a execução da função que busca dados do clima.
- [5] Finalizando, após todas essas chamadas e funções serem resolvidas, nós usamos o efeito put para despachar uma ação na nossa aplicação, enviando todos os resultados de todas as chamadas assíncronas dessa Saga. Atualizando nosso estado global e enviando as atualizações para nossos reducers.
