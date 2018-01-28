const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Task = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'user_id',
        },
        appointment: {
            type: DataTypes.STRING,
            field: 'appointment'
        },
        create_id: {
            field: 'creater_id',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
            unique: 'compositeIndex'
        }
    }, {
        classMethods: {
            associate: function (models) {
                Task.hasMany(Post, {
                    foreignKey: 'userId'
                });
            }
        }
    });



    return Task;
}
