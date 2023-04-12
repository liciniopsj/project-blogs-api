const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const data = await postService.getPosts();
  return res.status(200).status(data);
};

module.exports = {
  getAllPosts,
};