const app = require('express')();

app.listen(3000, (req, res) => {
  console.log('Servidor rodando');
});

app.get('/empregados/ti', (req, res) => {
  res.send(empregados);
});
 o
app.post('/empregados/ti', (req, res) => {
  let novoFuncionario = {
    nome: req.headers.nome,
    funcao: req.headers.funcao
  };
  empregados.push(novoFuncionario);
  res.send('Funcionario inserido com sucesso');
});

app.put('/empregados/:id/ti/', (req, res) => {
  for(const empregado of empregados){
    if(empregado.nome === req.params.id){
      res.send(empregado);
      return;
    }
  }
  res.send('Não foi possível localizar o empregado ' + req.params.id);
});


const empregados = [
  {
    nome: 'Gabriel',
    funcao: 'Desenvolvedor'
  },
  {
    nome: 'Fabricio',
    funcao: 'Designer'
  },
  {
    nome: 'Caliton',
    funcao: 'Tester'
  }
];