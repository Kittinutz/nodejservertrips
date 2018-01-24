const user = require('../model/User');
const service = require('../service/UserServices');
const moment = require('moment');
const models = require('../model/Providers');


exports.signup = function (req, res, next) {

    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(422).send({error: 'You must Provide email and password'});
    }


    models.User.findOne({
        where: {email:req.body.email}
    }).then(user => {
       if(!user){
        models.User.create(req.body).then(function () {
            return res.json({success:true});
        }).catch(function (err) {
            return res.status(400).send({message: err.message}); //
        }).catch(function (err) {
            return res.status(500).json({message: "issues trying to connect to database"});
        });

        }else{
           return res.status(422).send({error:'You accout is Exist'});
    }
    })





}





// module.exports = {
//     async index(req, res) {
//     res.send({
//         users: await service.findAll()
// })
// },
// async show(req, res) {
//     res.send({
//         user: await service.find(req.params.id)
// })
// },
// async store(req,res,next) {
//     const email = req.body.email;
//     const password = req.body.password;
//     if(!email||!password||!name){
//         return res.status(422).send({error: 'You must Provide email and password'});
//     }
//     models.User.findOne({where:{email:email}},function(err,existingUser){
//     if(err){ return next(err);}
//     if(existingUser){
//         return res.send(422).send({error: 'Email is in Use'});
//     }
//
//     });
//
//     user: await service.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         createdAt: moment(),
//         updatedAt: moment()
//     })
// },
// async update(req, res) {
//     result: await service.update(req.params.id, {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         updatedAt: moment()
//     })
// },
// async delete(req, res) {
//     result: await service.delete(req.params.id)
// }
// }
