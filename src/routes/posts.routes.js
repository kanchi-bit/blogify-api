const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controller");

// GET /api/v1/posts
router.get("/", getAllPosts);

// GET /api/v1/posts/:postId
router.get("/:postId", getPostById);

// POST /api/v1/posts
router.post("/", createPost);

// PUT /api/v1/posts/:postId
router.put("/:postId", updatePost);

// DELETE /api/v1/posts/:postId
router.delete("/:postId", deletePost);

module.exports = router;