//const MongoClient = require('mongodb').MongoClient;
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB');

    // db.collection('Todos').insertOne({
    //      text:'finish module 7 - databases',
    //      completed: false
    // },function(err,result){
    //     if(err){
    //         return console.log('unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // });

    db.collection('Users').insertOne({
        name:'Tyler',
        age:30,
        location:'Toronto'
    },function(err,result){
        if(err){
           return console.log('unable to add user');
        }
        console.log('user added');
        console.log(JSON.stringify(result.ops,undefined, 2));
    });
    db.close();
});

