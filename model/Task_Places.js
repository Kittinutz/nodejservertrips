const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Task_Places = sequelize.define("task_places", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        task_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'task_id',
            references: {
                model:models.Task,
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
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
        }
    });



    return Task_Places;
}
