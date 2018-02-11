const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Trips_Places = sequelize.define("trips_places", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
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
        place_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'place_id',
            references: {
                model:models.Places,
                key: 'id'
            },

            allowNull: false
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



    return Trips_Places;
}
