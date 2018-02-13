const models = require('../model/Providers');
const socket = require('../index');
// const Op = config.Sequelize.Op;
const Se = require('../config/sequelize');
const jwt = require('jwt-simple');
const config = require('../config');




function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}

function tokenDecode(user) {
    return jwt.decode(user, config.secret);
}
function getnewt(value){

    socket.io.on('connection',(client)=>{
        client.emit('news', { hello: 'world' });
        client.on('my other event', function (data) {
            console.log(data)
            if(data.my=='data'){
                client.emit('news',{hell:'yeah'});
            }
            if(data.my==''){
                client.emit('news',{hell:'ohyeah'});
            }
        });
    });
}
exports.CreateTask = function (req, res, next) {
    var user = tokenDecode(req.headers.authorization);

    socket.io.emit('news',{task:'have new task',languages:req.body.languages});
    models.Task.create({

        user_id: user.sub,
        appointment: req.body.date,
        numberofperson: req.body.numberofPerson
    }).then(user => {
        user.setActivities(req.body.activities);
        user.setLanguages(req.body.languages);
        res.send(user);
    });


};


exports.getOwnTask = function (req, res, next) {
    console.log(req.headers.authorization);
    var user = tokenDecode(req.headers.authorization);
    models.Task.findAll(
        {
            where: {user_id: user.sub},
            include: [{
                model: models.Languages,
                attributes: ['name']
            }, {
                model: models.Activities,
                attributes: ['name']
            }],
            order: [
                ['id', 'DESC']
            ]
        }).then(response => {
        res.send(response);
    })
};
exports.Notification = (req, res, next) => {
    var user = tokenDecode(req.headers.authorization);


    models.Task.findAll({
        include: [
            {
                model: models.User
            },
            {
                model: models.Languages,
                where: {id: Se.Sequelize.col('tasks.id')},
                attributes:[['id','value'],['languages','label']],
                through: {attributes: []},
                include: [{
                    model: models.Guide,
                    through: {attributes: []},
                    where: {id: user.sub},
                    attributes:[]
                }]
            }
        ]
    }).then(response => {
        res.send(response);
    });
};

