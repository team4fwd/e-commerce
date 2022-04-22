const mongoose = require('mongoose')
const Joi = require('joi');

const commentsSchema = mongoose.Schema({
    comment : {
        type    : String,
        trim    : true,
        required: true
    },
    user_info :{
        type        : {
            "user_id": String,
            "name": String,
            _id : false 
        },
        required    : true
    },
    product_id : {
        type: String,
        required    : true
    }
},{timestamps: true})


const comments = mongoose.model('comments',commentsSchema)

function commentsValidation(comment){
    const Schema = Joi.object().keys({
        comment         : Joi.string().required(),
        user_info       : Joi.object().required(),
        product_id    : Joi.string().required()
    })
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    return Schema.validate(comment,options)
}

module.exports = {
    commentsModels     :comments,
    commentsValidation :commentsValidation
}