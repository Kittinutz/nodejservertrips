const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    return sequelize.define("guides", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
            unique: 'compositeIndex'
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
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
                User.hasMany(Post, {
                    foreignKey: 'userId'
                });
            }
        }

    });
}
