var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/app', express.static(__dirname + '/app'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/*',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/login',function(req,res){
    res.send("login page");
});

app.listen(8081,function(){
    console.log('server listening on port 8081');
})