const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
  var  User =  sequelize.define("users", {
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
        email: {
            field: 'email',
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
      provider: {
          field: 'provider',
          type: DataTypes.STRING(191),
          primaryKey: false,
          allowNull: true,
          autoIncrement: false,
      },
      provider: {
          field: 'provider',
          type: DataTypes.STRING(191),
          primaryKey: false,
          allowNull: true,
          autoIncrement: false,
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
    }, {

      //option
    });
    User.beforeCreate((user, options) => {
       user.password = bcrypt.hashSync(user.password);
    });
    User.comparePassword = function(email,candidatePassword,callback){


        User.findOne({where:{email:email}}).then(user=>{
            console.log(email);
            console.log(candidatePassword,user.password);
            bcrypt.compare(candidatePassword,user.password,function (err,isMatch) {
            if(err){return callback(err)}
            callback(null,isMatch);
        });
        });

    }


    return User;
}




