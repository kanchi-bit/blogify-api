const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
  { id: "123-abc", title: "Special Post" },
];

/**
 * @desc    Get all posts
 * @route   GET /api/v1/posts
 * @access  Public
 */
exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      posts,
      count: posts.length,
    },
  });
};

/**
 * @desc    Get single post
 * @route   GET /api/v1/posts/:postId
 * @access  Public
 */
exports.getPostById = (req, res) => {
  const { postId } = req.params;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    data: {
      post,
    },
  });
};

/**
 * @desc    Create new post
 * @route   POST /api/v1/posts
 * @access  Public
 */
exports.createPost = (req, res) => {
  const { id, title } = req.body;

  if (!id || !title) {
    return res.status(400).json({
      success: false,
      message: "id and title are required",
    });
  }

  const existingPost = posts.find((p) => p.id === id);

  if (existingPost) {
    return res.status(409).json({
      success: false,
      message: "Post with this id already exists",
    });
  }

  const newPost = { id, title };
  posts.push(newPost);

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: {
      post: newPost,
    },
  });
};

/**
 * @desc    Update post
 * @route   PUT /api/v1/posts/:postId
 * @access  Public
 */
exports.updatePost = (req, res) => {
  const { postId } = req.params;
  const { title } = req.body;

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required to update",
    });
  }

  post.title = title;

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: {
      post,
    },
  });
};

/**
 * @desc    Delete post
 * @route   DELETE /api/v1/posts/:postId
 * @access  Public
 */
exports.deletePost = (req, res) => {
  const { postId } = req.params;

  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  const deletedPost = posts.splice(postIndex, 1);

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
    data: {
      post: deletedPost[0],
    },
  });
};