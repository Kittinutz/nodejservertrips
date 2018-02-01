const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
/******** ROUTER********/
const userrouter = require('./router/Userrouter');
const guiderrouter = require('./router/Guiderouter');
const task = require('./router/Taskrouter');
const morgan = require('morgan');


const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.json')[env];
const db        = {};


/****************SETUP BODY*************/
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/***********git diff****************************/

app.use(cors());

userrouter(app);
guiderrouter(app);
task(app);

 /****************SETUP Server*************/
const port = process.env.PORT || 5011;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on: ',port);
/***************************************/