const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Activities = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(191),
            field: 'name',
            allowNull: false,
        },
        status: {
            field: 'status',
            type: DataTypes.ENUM('on', 'off'),
            allowNull: false,
            unique: 'compositeIndex'
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
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



    return Activities;
}
