// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
  ];

  res.status(200).json({
    success: true,
    data: posts
  });
};

const getPostById = async (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: "Fetching data for post with ID: " + postId
  });
};

module.exports = {
  getAllPosts,
  getPostById
};