const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB');

    // db.collection('Todos').find().toArray().then(function(docs){
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));

    // },function(err){
    //     console.log("unable to fetch todos");
    // });    

    // db.collection('Todos').find().count().then(function(count){
    //     console.log('Todos count: ',count);
    //     //console.log(JSON.stringify(docs,undefined,2));   
    // },function(err){
    //     console.log("unable to fetch todos");
    // });

    db.collection('Users').find({location:'Toronto'}).count().then(function(count){
        console.log('Todos count: ', count);
        //console.log(JSON.stringify(docs,undefined,2));   
    },function(err){
        console.log("unable to fetch todos");
    });

    db.close();
});
