var http = require('http'),
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
morgan = require('morgan'),
fs = require('fs'),
configenv = require('./env'),
apiRoutes = express.Router(); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

apiRoutes.post('/getBody', function(req, res) {
    res.json(req.body);
});


app.use('/api', apiRoutes);



if (configenv.envir === "development"){
    http.createServer(app).listen(configenv.port);
}

else{
    app.listen(process.env.PORT);  
}

console.log('API running on ' + configenv.envir + '"port:'+ configenv.port + '"');