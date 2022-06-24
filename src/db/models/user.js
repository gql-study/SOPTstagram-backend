export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nickName: {
        type: DataTypes.STRING(15),
        unique: true,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: 'user',
      indexes: [
        {
          unique: false,
          fields: ['nickName'],
        },
      ],
    }
  );
  return User;
};
