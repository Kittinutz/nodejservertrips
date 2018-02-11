const bcrypt = require("bcrypt-nodejs");
const moment = require('moment');
module.exports = (sequelize , DataTypes) =>
{
    var Trip = sequelize.define("trips", {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        creater_id: {
            field: 'creater_id',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
            unique: 'compositeIndex'
        },
        location: {
            field: 'location',
            type: DataTypes.STRING(191),
            defaultValue:'Phuket',
        },
        price:{
          field:'price',
          type: DataTypes.INTEGER,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
            get: function() {
                return moment.utc(this.getDataValue('created_at')).format('YYYY-MM-DD');
            }
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            primaryKey: false,
            autoIncrement: false,
            get: function() {
                return moment.utc(this.getDataValue('updated_at')).format('YYYY-MM-DD');
            }
        }
    });
    return Trip;
}



