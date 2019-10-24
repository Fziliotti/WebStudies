// PARTE DE CONFIGURACAO DO SEQUELIZE, VOCE PODE RODAR O BANCO NO DOCKER OU OUTRA COISA
module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: '1234',
  database: 'tddNode',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};