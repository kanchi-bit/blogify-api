// src/controllers/posts.controller.js

// Fake in-memory data
const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
  { id: "123-abc", title: "Special Post" }
];

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      posts
    }
  });
};

// GET /api/v1/posts/:postId
const getPostById = (req, res) => {
  const postId = req.params.postId;

  const post = posts.find(p => p.id === postId);

  // Even if you later handle 404 differently,
  // assignment says successful requests must follow envelope.
  return res.status(200).json({
    success: true,
    data: {
      post
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById
};