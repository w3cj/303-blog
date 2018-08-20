
exports.up = knex => knex.schema.createTable('post', (table) => {
  table.increments();
  table.string('title', 200).notNullable();
  table.string('author', 50).notNullable();
  table.text('content').notNullable();
});

exports.down = knex => knex.schema.dropTable('post');
