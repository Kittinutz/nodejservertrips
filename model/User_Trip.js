const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Booking = sequelize.define("user_trips", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'user_id',
            references: {
                model:models.User,
                key: 'id'
            },
            allowNull: false
        },
        trip_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'trip_id',
            references: {
                model:models.Trip,
                key: 'id'
            },

            allowNull: false
        },
        appointment:{
          type:DataTypes.DATE,
          field:'appointment',
          allowNull:false
        },
        numberofAdult:{
          type:DataTypes.INTEGER(10),
            field:'numberofAdult',
            allowNull:false,
        },
        numberofchilde:{
            type:DataTypes.INTEGER(10),
            field:'numberofchilde',
            default:0,
            allowNull:false,

        },
        totalprice:{
            type:DataTypes.DECIMAL(19,2),
            field:'totalprice',
            allowNull:false
        },
        commission:{
            type:DataTypes.DECIMAL(5,2),
            field:'commission',
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL(19,2),
            field:'price',
            allowNull:false
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
        }
    });



    return Booking;
}
