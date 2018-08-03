const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB');

    //delete many
    // db.collection('Todos').deleteMany({text:'return clothes from zara'}).then(function(result){
    //     console.log(result);
    // },function(err){
    //     console.log('cannot delete todos');
    // });


    //delete one
    // db.collection('Todos').deleteOne({text:'return clothes from eddie bauer'}).then(function(result){
    //     console.log(result);
    // },function(err){
    //     console.log('error');
    // });


    //find one and delete
    db.collection('Todos').findOneAndDelete({completed:false}).then(function(result){
        console.log(result.value);
    },function(err){
        console.log("no good");
    });

    db.close();
});
