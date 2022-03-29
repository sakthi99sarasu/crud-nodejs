var express = require('express')
var http = require('http')
var app = express();

app.get('/', function (req, res) {
    res.send('Hello MVC Crud')
})


http.createServer(app.listen(4000));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./routes/empRoutes.js')(app);
