const express = require('express');

const router = express.Router();

const { Post } = require('../db');

/**
 * @api {post} /posts Create a post
 * @apiName AddPost
 * @apiGroup Posts
 * @apiSchema (Body) {jsonschema=../db/schemas/json/post.json} apiParam
 * @apiExample {json=../db/schemas/examples/post.json} apiParamExample Request JSON
 * @apiExample {json=../db/schemas/examples/createdpost.json} apiSuccessExample Response JSON
 */
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
