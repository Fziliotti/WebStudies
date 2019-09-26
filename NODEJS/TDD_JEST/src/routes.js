const routes = require('express').Router();
const { User } = require('./app/models');


User.create({ name: 'Fabricio', email: 'ffz.zilioti@gmail.com', password_hash: '15655651616'  });

module.exports = routes;