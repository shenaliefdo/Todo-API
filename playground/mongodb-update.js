const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB');

    // db.collection("Todos").findOneAndUpdate({_id:new ObjectID('5b63c208238370fbf1c7f13b')},
    // {
    //     $set:{
    //         completed: true
    //     }
    // }, {returnOriginal:false}).then(function(result){
    //     console.log(result);
    // },function(err){
    //     console.log('error');
    // });

    db.collection("Users").findOneAndUpdate({_id:new ObjectID('5b63a565238370fbf1c7ee03')},
    {
        $set:{
            name: 'Changed'

        },$inc:{
            age:1
        }
    }, {returnOriginal:false}).then(function(result){
        console.log(result);
    },function(err){
        console.log('error');
    });
    db.close();
});
