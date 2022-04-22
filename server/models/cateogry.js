const mongoose = require('mongoose')
const Joi = require('joi');


const cateogrySchema = mongoose.Schema({
    categoryName    : {
        type        : String,
        maxLength   : 20,
        trim        : true,
        required    : true,
        unique      : true
    },
},{
    timestamps: true
})
const cateogry = mongoose.model("cateogry",cateogrySchema)

function cateogryValidation(cateogry){
    const Schema = Joi.object().keys({
        categoryName    : Joi.string().max(20).required()
    })
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    return Schema.validate(cateogry,options)
}


module.exports = {
    "cateogry":cateogry,
    "cateogryValidation":cateogryValidation
}
