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
        numberofperson:{
            type: DataTypes.INTEGER(10),
            field:'numberofperson'
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



    return Task;
}
