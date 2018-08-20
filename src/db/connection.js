const Knex = require('knex');

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../../knexfile');

const knex = Knex(knexConfig[environment]);

module.exports = knex;
