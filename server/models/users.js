const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _=require('lodash');

var UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
        unique:true,
        validate: {
            validator: validator.isEmail,
            message:'not a valid email'
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
      tokens:[{
          access: {
              type:String,
              required:true
          },
          token: {
              type:String,
              required:true
          }
      }]
});

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({
        _id:user._id.toHexString(),access
    },'secret_value').toString();

    user.tokens = user.tokens.concat([{
        access,token
    }]);
    return user.save().then(()=>{
       // return user;  
       return token;
    });
};

UserSchema.methods.find

var User = mongoose.model('User',UserSchema);
//var User_method = mongoose.model('User_method',generateAuthToken);

 
module.exports = {User}; 
//module.exports = {User_method};