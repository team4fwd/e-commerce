const mongoose = require('mongoose')
const Joi = require('joi');


const productSchema = mongoose.Schema({
    productName    : {
        type        : String,
        minLength   : 5,
        maxLength   : 30,
        trim        : true,
        required    : true
    },
    categoryName    : {
        type        : String,
        maxLength   : 20,
        trim        : true,
        required    : true
    },
    descriptions    : {
        type        : String,
        trim        : true,
        required    : true
    },
    price           :{
        type        : Number,
        trim        : true,
        required    : true
    },
    quantity        :{
        type        : Number,
        trim        : true,
        required    : true
    },
    images          : {
        type        : [{
            "public_id": String,
            "url": String,
            _id : false 
        }],
        required    : true
    },
    
},{
    timestamps: true
})
const products = mongoose.model("products",productSchema)

function productValidation(product){
    const Schema = Joi.object().keys({
        productName     : Joi.string().max(30).min(5).required(),
        categoryName    : Joi.string().max(20).required(),
        descriptions    : Joi.string().required(),
        price           : Joi.number().required(),
        quantity        : Joi.number().required()
    })
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    return Schema.validate(product,options)
}


module.exports =  {products,productValidation}
