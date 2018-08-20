const { Model } = require('objection');
const postSchema = require('../schemas/post');

class Post extends Model {
  static get tableName() {
    return 'post';
  }

  static get jsonSchema() {
    return postSchema;
  }
}

module.exports = Post;
