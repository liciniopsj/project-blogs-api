module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    }
  );
  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postCategory,
      foreignKey: 'categoryId',
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: postCategory,
      foreignKey: 'postId',
      as: 'blog_posts',
    });
  };

  return postCategory;
};
