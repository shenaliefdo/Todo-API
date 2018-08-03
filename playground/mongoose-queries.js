const {mongoose} = require('../server/db/mongoose');
const {todo} = require('../server/models/todos'); 


todo.find({
    text:'test'
}).then(function(todos){
    console.log(todos);
});