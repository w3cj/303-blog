const express = require('express');

const router = express.Router();

const { Post } = require('../db');

router.post('/', async (req, res, next) => {
  try {
    const result = await Post
      .query()
      .insert(req.body)
      .returning('*');

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
