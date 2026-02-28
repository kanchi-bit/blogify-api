const express = require("express");
const postController = require("../controllers/posts.controller");

const router = express.Router();

router.get("/", postController.getAllPosts);

// IMPORTANT: dynamic route goes after "/"
router.get("/:postId", postController.getPostById);

module.exports = router;