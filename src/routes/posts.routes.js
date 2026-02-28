const express = require("express");

const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
  ];

  res.status(200).json({
    success: true,
    data: posts
  });
});

module.exports = router;