const { BlogPost, Category, User } = require('../models');

const getPosts = async () => {
  const data = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

return data;
};

module.exports = {
  getPosts,
};
