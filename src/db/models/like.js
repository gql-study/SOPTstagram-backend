export default (sequelize, DataTypes) => {
    const Like = sequelize.define('like',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        }, {
        modelName: 'Like',
        tableName: 'like',
        charset: 'utf8',
        initialAutoIncrement: 1
    });
    return Like;
};