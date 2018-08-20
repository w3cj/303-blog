const { Model } = require('objection');

const connection = require('./connection');
const Post = require('./models/Post');

Model.knex(connection);

module.exports = {
  Post,
};
