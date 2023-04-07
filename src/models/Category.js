module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    }
  );

  return category;
};
