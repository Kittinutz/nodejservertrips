const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Task_Act = sequelize.define("tasks_activities", {
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
        language_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'language_id',
            references: {
                model:models.Languages,
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



    return Task_Act;
}
