const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

//creaating hash and verifying using library
var data = {
    id:4
};

var token= jwt.sign(data,'secret_value');
console.log(token);

var decoded_token=jwt.verify(token,'secret_value');
console.log(decoded_token);


//creating the hash and verifying urself
// var message = 'I am user 1';
//var hash_string = SHA256(message).toString(); 

// console.log(message);
// console.log(hash_string);

// var data = {
//     id:4
// };

// var token = {
//     data, //data: data
//     hash:   SHA256(JSON.stringify(data)+'secretvalue').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString(); 

// var result_hash = SHA256(JSON.stringify(token.data)+`secretvalue`).toString()

// if(result_hash === token.hash){
//     console.log('data was not changed');
// } else{
//     console.log('data was changed,trust compromised');
//}  