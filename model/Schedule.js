const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Schedule = sequelize.define("schedules", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        trip_id: {
            type: DataTypes.INTEGER(10),
            field: 'trip_id'


        },
        time: {
            field: 'time',
            type: DataTypes.STRING(191),
        },
        description:{
            field:'description',
            type: DataTypes.STRING(191),
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



    return Schedule;
}
