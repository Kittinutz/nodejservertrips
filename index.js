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
const morgan = require('morgan');


const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.json')[env];
const db        = {};


/****************SETUP BODY*************/
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/***********git diff****************************/


app.use(cors());
userrouter(app);
guiderrouter(app);
task(app);
api(app);
// io.on('connection', (client) => {
//     // here you can start emitting events to the client
//     client.on('subscribeToTimer', (interval) => {
//         console.log('client is subscribing to timer with interval ', interval);
//         setInterval(() => {
//             client.emit('timer', new Date());
//         }, interval);
//     });
// });
 /****************SETUP Server*************/
const port = process.env.PORT || 5011;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on: ',port);
/***************************************/
// const socketpost = 5012;
// io.listen(socketpost);
// console.log('io listening on port ', socketpost);
