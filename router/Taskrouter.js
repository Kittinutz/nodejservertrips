const TaskController = require('../controller/TaskController');

module.exports = function(app){


    app.post('/createtask',TaskController.CreateTask);
    app.post('/getowntask',TaskController.getOwnTask);

}
