const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize , DataTypes) =>
{
    var Guide = sequelize.define("guides", {
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
        surname: {
            type: DataTypes.STRING,
            field: 'surname'
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
            unique: 'compositeIndex'
        },
        image:{
            field:'image',
            type: DataTypes.STRING(255)
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            primaryKey: false,
            allowNull: false,
            autoIncrement: false,
        },
        tel:{
            field: 'tel',
            type: DataTypes.STRING(191),
            primaryKey:false,
            allowNull:false,
            autoIncreament:null
        },
        address:{
          field:'address',
          type:DataTypes.STRING(191),
          primaryKey:false,
          allowNull:false,
          autoIncreament:null
        },
        codeguide:{
            field:'code_guide',
            type:DataTypes.STRING(191),
            allowNull:false,
            autoIncreament:null
        },
        gender:{
            field:'gender',
            type:DataTypes.STRING(191),
            allowNull:false,
            autoIncreament:null
        },
        DOB:{
            field:'DOB',
            type:DataTypes.DATEONLY
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
    Guide.beforeCreate((user, options) => {
        user.password = bcrypt.hashSync(user.password);
});
    Guide.comparePassword = function(email,candidatePassword,callback){


        Guide.findOne({where:{email:email}}).then(guide=>{
            console.log(email);
        console.log(candidatePassword,guide.password);
        bcrypt.compare(candidatePassword,guide.password,function (err,isMatch) {
            if(err){return callback(err)}
            callback(null,isMatch);
        });
    });

    }

    return Guide;
}
