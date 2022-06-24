export default (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'comment',
    }
  );
  return Comment;
};
