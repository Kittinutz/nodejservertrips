const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Languages = sequelize.define("languages", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        langugas: {
            type: DataTypes.STRING(191),
            field: 'langugas',
            allowNull: false,
            unique: 'compositeIndex',
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



    return Languages;
}
