const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

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

app.delete('/todos',function(req,res){
    todo.findOneAndRemove({
        text:'todoo'
    }).then(function(){
        console.log('');
    },function(err){
        console.log('error:',err);
    });
});

app.patch('/todos',function(req,res){
    var body = _.pick(req.body,['text','completed']);

    todo.findOneAndUpdate({
        text:'todoo'
    },{
        completed:false,
        completedAt:1
    }).then(function(todo){
        console.log(todo);
        res.send(todo);
        
    },function(err){
        console.log('err');
        res.send('err');
    });
});

app.listen(port,function(){
    console.log(`started app on port ${port}`);
})