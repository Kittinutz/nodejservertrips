const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userrouter = require('./router/usersrouter');
const morgan = require('morgan');

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.json')[env];
const db        = {};


/****************SETUP BODY*************/
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
/***************************************/


userrouter(app);

 /****************SETUP Server*************/
const port = process.env.PORT || 5011;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on: ',port);
/***************************************/