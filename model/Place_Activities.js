const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Places_Act = sequelize.define("places_activities", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        place_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'place_id',
            references: {
                model:models.Task,
                key: 'id'
            },
            allowNull: false
        },
        activitie_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'activities_id',
            references: {
                model:models.Activities,
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



    return Places_Act;
}
