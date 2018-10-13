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

function getnewt(value) {
  
  socket.io.on('connection', (client) => {
    client.emit('news', {hello: 'world'});
    client.on('my other event', function (data) {
      console.log(data)
      if (data.my == 'data') {
        client.emit('news', {hell: 'yeah'});
      }
      if (data.my == '') {
        client.emit('news', {hell: 'ohyeah'});
      }
    });
  });
}

exports.CreateTask = function (req, res, next) {
  const {headers,body} = req;
  const {name,appointment,adult} = body;
  var user = tokenDecode(headers.authorization);
  var languages = [];
  var plances =[];
  body.languages.map(value=>{
    return languages.push(value.key)
  });
  body.place.map(value=>{
    return  plances.push(value.id)
  })
  console.log('languages',languages,'places',plances);
  
  socket.io.emit('news', {task: 'have new task', languages: languages});
  models.Task.create({
      user_id: user.sub,
      name:req.body.name,
      appointment: appointment,
      numberofperson: adult
  }).then(response => {
      response.setLanguages(languages);
      response.setPlaces(plances);
      res.send(response);
  })
};


exports.getOwnTask = function (req, res, next) {
  console.log(req.headers.authorization);
  var user = tokenDecode(req.headers.authorization);
  models.Task.findAll(
    {
      where: {user_id: user.sub},
      include: [{
        model: models.Languages,
        attributes: ['name'],
        through:{attributes:[]}
      }, {
        model: models.Places,
        through:{attributes:[]}
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
        model: models.Places,
        through: {attributes: []},
      },
      {
        model: models.Languages,
        where: {id: Se.Sequelize.col('tasks.id')},
        attributes: [['id', 'value'], ['languages', 'label']],
        
        include: [{
          model: models.Guide,
          through: {attributes: []},
          where: {id: user.sub},
          attributes: []
        }]
      }
    ]
  }).then(response => {
    res.send(response);
  });
};

exports.getDetailTask = (req, res, next) => {
  models.Task.find(
    {
      where: {id: req.params.id},
      include: [
        {
          model: models.Activities,
          through: {attributes: []},
          include: [{
            model: models.Places,
            through: {attributes: []}
          }]
        },
        {
          model: models.Places,
          include: [{
            model: models.Activities,
          }]
        }
      ]
    }
  ).then(response => {
    res.send(response);
  })
};