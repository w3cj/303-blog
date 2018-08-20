module.exports = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
      required: true,
      description: 'The title of the post.',
      minLength: 1,
      maxLength: 200,
    },
    author: {
      type: 'string',
      required: true,
      description: 'The author of the post.',
      minLength: 1,
      maxLength: 50,
    },
    content: {
      type: 'string',
      required: true,
      description: 'The content of the post.',
    },
  },
};
