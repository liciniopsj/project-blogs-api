const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
    const data = await postService.getPosts();
    return res.status(200).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const data = await postService.getPostById(id);

  if (!data) return res.status(404).json({ message: 'Post does not exist' });
   return res.status(200).json(data);
};

module.exports = {
  getAllPosts,
  getPostById,
};