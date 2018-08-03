const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {user} = require('./models/users');
const {todo} = require('./models/todos');

var app = express();

app.use(bodyParser.json());

app.post('/todos',function(req,res){
    var t1 = new todo({
        text:req.body.text
    });
    
    t1.save().then(function(result){
        res.send(result);
    },function(err){
        res.status(400).send(err);
    });
});

app.listen(3000,function(){
    console.log('listening on port 3000');
})