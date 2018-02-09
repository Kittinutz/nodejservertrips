const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Places = sequelize.define("places", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'name_place',
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        lat: {
            type: DataTypes.DECIMAL(9,6),
            field: 'lat'
        },
        lon: {
            type: DataTypes.DECIMAL(9,6),
            field: 'lon'
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
    });



    return Places;
}
