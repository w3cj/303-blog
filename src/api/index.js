const express = require('express');

const router = express.Router();

const posts = require('./posts');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/posts', posts);

module.exports = router;
