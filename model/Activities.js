const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Activities = sequelize.define("activities", {
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
            unique: 'compositeIndex',
        },
        image: {
            type: DataTypes.STRING(191),
            field: 'image',
            allowNull: true,
        },

        status: {
            field: 'status',
            type: DataTypes.ENUM('on', 'off'),
            allowNull: false,
            unique: 'compositeIndex',
            defaultValue: 'on'
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

    });



    return Activities;
}
