const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Task_Act = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        task_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'task_id',
            references: 'tasks',
            referencesKey: 'id',
            allowNull: false
        },
        activitie_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'activitie_id',
            references: 'activities',
            referencesKey: 'id',
            allowNull: false
        },createdAt: {
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
