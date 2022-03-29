module.exports = app=>{

    var employeeController = require('../controller/empControl.js');
    var router = require('express').Router();
console.log("TEST");
    

    router.post('/insert',employeeController.insert);
    router.get('/view', employeeController.select);
    router.get('/view/:emp_id',employeeController.select);
    router.delete('/delete',employeeController.delete);
    router.put('/edit',employeeController.insert);


    app.use('/api',router);
};