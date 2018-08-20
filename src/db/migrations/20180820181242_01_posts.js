
exports.up = knex => knex.schema.createTable('post', (table) => {
  table.increments();
  table.string('text', 200);
  table.string('author', 50);
  table.text('content');
});

exports.down = knex => knex.schema.dropTable('posts');
