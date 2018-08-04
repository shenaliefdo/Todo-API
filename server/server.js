const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {user} = require('./models/users');
const {todo} = require('./models/todos');

var port = process.env.PORT || 3000;

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

app.get('/todos',function(req,res){
   todo.find().then(function(todos){
        res.send(todos);
   },function(err){
        res.send(err);
   });
});

app.listen(port,function(){
    console.log(`started app on port ${port}`);
})