const bcrypt = require("bcrypt-nodejs");
const models = require('./Providers');
module.exports = (sequelize , DataTypes) =>
{
    var Languages = sequelize.define("languages_guides", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        guide_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'guide_id',
            references: {
                model:models.Guide,
                key: 'id'
            },
            allowNull: false
        },
        languages_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            field: 'languages_id',
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



    return Languages;
}
