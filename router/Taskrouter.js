const TaskController = require('../controller/TaskController');

module.exports = function(app){


    app.post('/createtask',TaskController.CreateTask);
    app.get('/task',TaskController.getTask);
    app.post('/getowntask',TaskController.getOwnTask);

}
