const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const io = require('socket.io')();
/******** ROUTER********/
const userrouter = require('./router/Userrouter');
const guiderrouter = require('./router/Guiderouter');
const task = require('./router/Taskrouter');
const api = require('./router/Application');
const triprouter = require('./router/Triprouter');
const morgan = require('morgan');
const socktcontroll = require('./controller/Application');
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.json')[env];
const db        = {};
const socketchat = require('./controller/Socketcontroller');

// // socktcontroll.socket();
// const socket = {};
// socket.io = io;
//
// exports.io = io;
const Task = require('./controller/TaskController');


/****************SETUP BODY*************/
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/icon'))
/***********git diff****************************/


app.use(cors());
userrouter(app);
guiderrouter(app,io);
task(app);
api(app);
triprouter(app);

    socketchat.socket(io);


    // io.on('connection',(client)=>{
    //     client.emit('news', { hello: 'world' });
    //     client.on('my other event', function (data) {
    //         console.log(data)
    //         if(data.my=='data'){
    //             client.emit('news',{hell:'yeah'});
    //         }
    //         if(data.my==''){
    //             client.emit('news',{hell:'ohyeah'});
    //         }
    //     });
    // });


 /****************SETUP Server*************/
const port = process.env.PORT || 5011;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on: ',port);
/***************************************/
const socketpost = 5012;
io.listen(socketpost);
console.log('io listening on port ', socketpost);
exports.io = io;
