var mysql=require('mysql');// initializing mysql module

//Establishing connection

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'unom'
  });

  //

connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);// where the error has initiated
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
    });



    module.exports = connection;