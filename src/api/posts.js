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

/**
 * @api {get} /posts Get all posts
 * @apiName GetPosts
 * @apiGroup Posts
 * @apiExample {json=../db/schemas/examples/postArray.json} apiSuccessExample Response JSON
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await Post.query();

    res.json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @api {get} /posts/:id Get one post by ID
 * @apiName GetPost
 * @apiGroup Posts
 * @apiParamExample {string} Request URL
 *    https://303-blog.now.sh/api/v1/events/7
 * @apiExample {json=../db/schemas/examples/createdPost.json} apiSuccessExample Response JSON
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Post not found"
 *     }
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post
      .query()
      .where({ id })
      .first();

    if (result) {
      res.json(result);
    } else {
      res.status(404);
      const error = new Error('Post not found');
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
