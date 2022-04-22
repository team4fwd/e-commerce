const mongoose = require('mongoose')
const Joi = require('joi');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const userProfileSchema = Schema({
    user_id     : {
        type        : ObjectId,
        required    : true
    },
    phoneNumber     : {
        type        : String,
        minLength   : 10,
        maxLength   : 15,
        trim        : true,
    },
    address         : {
        type        : String,
        maxLength   : 100,
        trim        : true,
    },
    card            :{
        type        : []
    },
    avatar          : {
        type        : {
            "public_id": String,
            "url": String,
            _id : false 
        },
        maxLength   : 100,
        trim        : true,
    }
})

const userProfile = mongoose.model('userProfile',userProfileSchema)

function userProfileValidation(user){
    const Schema = Joi.object().keys({
        phoneNumber   : Joi.string().max(15).min(10).required(),
        address    : Joi.string().max(100).required()
    })
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    return Schema.validate(user,options)
}
module.exports = {
    "userProfile":userProfile,
    "userProfileValidation":userProfileValidation
}
