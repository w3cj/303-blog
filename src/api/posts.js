const express = require('express');

const router = express.Router();

const { Post } = require('../db');

function validId(req, res, next) {
  if (Number.isNaN(Number(req.params.id))) {
    const error = new Error('Invalid id');
    next(error);
  } else {
    next();
  }
}

async function postExists(req, res, next) {
  try {
    const { id } = req.params;
    const post = await Post
      .query()
      .where({ id })
      .first();

    if (post) {
      next();
    } else {
      res.status(404);
      const error = new Error('Post not found');
      next(error);
    }
  } catch (error) {
    next(error);
  }
}

/**
 * @api {post} /posts Create a post
 * @apiName AddPost
 * @apiGroup Posts
 * @apiSchema (Body) {jsonschema=../db/schemas/json/post.json} apiParam
 * @apiExample {json=../db/schemas/examples/post.json} apiParamExample Request JSON
 * @apiExample {json=../db/schemas/examples/createdpost.json} apiSuccessExample Response JSON
 * @apiExample {json=../db/schemas/examples/postError.json} apiErrorExample Error-Response
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
 *    https://303-blog.now.sh/api/v1/posts/7
 * @apiExample {json=../db/schemas/examples/createdPost.json} apiSuccessExample Response JSON
 * @apiExample {json=../db/schemas/examples/invalidIdError.json} apiErrorExample Error-Response
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Post not found"
 *     }
 */
router.get('/:id', validId, postExists, async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post
      .query()
      .where({ id })
      .first();

    res.json(post);
  } catch (error) {
    next(error);
  }
});

/**
 * @api {post} /posts/:id Update a post
 * @apiName UpdatePost
 * @apiGroup Posts
 * @apiSchema (Body) {jsonschema=../db/schemas/json/post.json} apiParam
 * @apiParamExample {string} Request URL
 *    https://303-blog.now.sh/api/v1/posts/7
 * @apiExample {json=../db/schemas/examples/updatePost.json} apiParamExample Request JSON
 * @apiExample {json=../db/schemas/examples/updatedPost.json} apiSuccessExample Response JSON
 * @apiExample {json=../db/schemas/examples/invalidIdError.json} apiErrorExample Error-Response
 * @apiExample {json=../db/schemas/examples/postError.json} apiErrorExample Error-Response
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Post not found"
 *     }
 */
router.post('/:id', validId, postExists, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post
      .query()
      .update(req.body)
      .where({ id })
      .returning('*');

    res.json(result[0]);
  } catch (error) {
    next(error);
  }
});

/**
 * @api {delete} /posts/:id Delete a post
 * @apiName DeletePost
 * @apiGroup Posts
 * @apiParamExample {string} Request URL
 *    https://303-blog.now.sh/api/v1/posts/7
 * @apiExample {json=../db/schemas/examples/createdPost.json} apiSuccessExample Response JSON
 * @apiExample {json=../db/schemas/examples/invalidIdError.json} apiErrorExample Error-Response
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Post not found"
 *     }
 */
router.delete('/:id', validId, postExists, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Post
      .query()
      .del()
      .where({ id })
      .returning('*');

    res.json(result[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
