const bcrypt = require("bcrypt-nodejs");

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
        create_id: {
            field: 'creater_id',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
            unique: 'compositeIndex'
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        tel: {
            field: 'tel',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncreament: null
        },
        address: {
            field: 'address',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncreament: null
        },
        codeguide: {
            field: 'code_guide',
            type: DataTypes.STRING(191),
            allowNull: false,
            autoIncreament: null
        },
        gender: {
            field: 'gender',
            type: DataTypes.STRING(191),
            allowNull: false,
            autoIncreament: null
        },
        DOB: {
            field: 'DOB',
            type: DataTypes.DATEONLY
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
        classMethods: {
            associate: function (models) {
                User.hasMany(Post, {
                    foreignKey: 'userId'
                });
            }
        }

    });

}

return Trip;
}
