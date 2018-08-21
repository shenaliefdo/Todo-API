const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/users.js');
const {Todo} = require('./models/todos');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos',function(req,res){
    var t1 = new Todo({
        text:req.body.text
    });
    
    t1.save().then(function(todo){
        res.send(todo);
    },function(err){
        res.status(400).send(err);
    });
});

app.get('/todos',function(req,res){
   Todo.find().then(function(todos){
        res.send(todos);
   },function(err){
        res.send(err);
   });
});

app.delete('/todos',function(req,res){
    Todo.findOneAndRemove({
        text:'todoo'
    }).then(function(){
        console.log('');
    },function(err){
        console.log('error:',err);
    });
});

app.patch('/todos',function(req,res){
    var body = _.pick(req.body,['text','completed']);

    Todo.findOneAndUpdate({
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

app.post('/users',function(req,res){
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    
    user.save().then(() =>{
        return user.generateAuthToken();
    }).then((token)=>{ //user
       // console.log(`token: ${user.tokens[0].token}, user: ${user}`);
        //res.header('x-auth',user.tokens[0].token).send(user.toJSON());
        res.header('x-auth',token).send(user);
    }).
     catch((e)=>{
        res.status(400).send(e);
    })
});

app.get('/users',function(req,res){
    users.find().then(function(u){
        res.send(u);
    },function(e){
        res.send('error',e);
    }); 
});

app.listen(port,function(){
    console.log(`started app on port ${port}`);
})