const posts = require('../examples/posts');

exports.seed = async (knex) => {
  await knex.raw('DELETE FROM "post"; ALTER SEQUENCE post_id_seq RESTART WITH 7;');
  return knex('post').insert(posts);
};
