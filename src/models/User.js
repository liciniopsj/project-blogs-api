module.exports = (sequelize, DataTypes) => {
  const user =  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'id',
      as: 'BlogPosts',
    });
  };

  return user;
}
