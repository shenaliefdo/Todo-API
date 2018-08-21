const {mongoose} = require('../server/db/mongoose');
const {todo} = require('../server/models/todos'); 
const {user} = require('../server/models/users')


todo.find({
    text:'test'
}).then(function(todos){
    console.log(todos);
});

todo.findOne({
    text:'test'
}).then(function(todos){
    console.log(todos);
});

//findOneById