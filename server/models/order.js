const mongoose = require('mongoose')
const Joi = require('joi');

const orderSchema = mongoose.Schema({
    user_id     : {
        type        : String,
        required    : true
    },
    orderItems       :{
        type        : [{
            "product_id": String,
            "img": String,
            "price": Number,
            "amount" : Number,
            "name": String,
            _id : false 
        }],
        required    : true
    },
    shippingInfo       :{
        type        : {
            "address": String,
            "phone": String,
            _id : false
        },
        required    : true
    },
    itemsPrice     : {
        type        : Number,
        required    : true
    },
    shippingPrice     : {
        type        : Number,
        required    : true
    },
    taxPrice     : {
        type        : Number,
        required    : true
    },
    totalPrice     : {
        type        : Number,
        required    : true
    },
    orderStauts     : {
        type        : String,
        enum        : ['Inprogress', 'Shipped','In The Way','Delivered','Canceled'],
        required    : true,
        default     : 'Inprogress'
    },
    paymentMethod     : {
        type        : String,
        enum        : ['Cash On Delivered', 'Credit Card'],
        required    : true,
        default     : 'Cash On Delivered'
    }
},{
    timestamps: true
})

const order = mongoose.model('order',orderSchema)

function orderValidation(order){
    const Schema = Joi.object().keys({
        user_id         : Joi.string().required(),
        orderItems      : Joi.array().required(),
        shippingInfo    : Joi.object().required(),
        itemsPrice      : Joi.number().required(),
        shippingPrice   : Joi.number().required(),
        taxPrice        : Joi.number().required(),
        totalPrice      : Joi.number().required()
    })
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    return Schema.validate(order,options)
}

module.exports = {
    orderModels     :order,
    orderValidation :orderValidation
}