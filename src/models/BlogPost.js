module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
    updated: {
      type: DataTypes.INTEGER,
    },
  },
    {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    }
  );

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return blogPost;
};
