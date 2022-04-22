const {orderModels,orderValidation} = require("../models/order")
const {products} = require('../models/products')
const {users} = require("../models/users")
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

const orderController = {
    add : async (req,res)=>{
        const {error} = orderValidation(req.body)
        if (error) {
            return res.status(404).json({status:false,message: error.details[0].message})
        }
        const orderItems = req.body.orderItems  
        const checkStock =[]
        const existPublicID = []
        Promise.all(
            orderItems.map((item)=>{
                if (!item.product_id) {
                    existPublicID.push(1)
                }
            })
        ).then(()=>{
            if (existPublicID.length>0) {
                return res.status(404).json({status:false,message:'No Public_id Exist'})
            }
            Promise.all(
                orderItems.map(async(item)=>{
                    await products.findById({_id:item.product_id}).then((prod)=>{
                        if (item.amount>prod.quantity) {
                            checkStock.push(item.name)
                        }
                    })
                })
            ).then(()=>{
                if(checkStock.length>0){
                    return res.status(404).json({OutOfStock:checkStock,status:false,message:'Out Of Stock'})
                }
                const addOrder = new orderModels(req.body)
                try {
                        addOrder.save().then(()=>{
                        orderItems.map(async(item)=>{
                            await products.findByIdAndUpdate({_id:item.product_id},{$inc:{quantity:-item.amount}})
                        })
                        res.json({order:addOrder,status:true,message:"Order Added Successfully"})
                    })
                } catch (error) {
                    res.json({status:false,message:"Order Not Added"})
                }
            })
        })

    },
    all : async (req,res)=>{
        try {
            const allOrder = await orderModels.find({})
            res.json(allOrder)
        } catch (error) {
            res.json({status:false,message:"There are no Orders"})
        }
    },
    changeStatus : async (req,res)=>{
        try {
            const user_id = await orderModels.findById({_id:req.params.id},{user_id:1,_id:0})
            const user = await users.findById({_id:user_id.user_id},{email:1,_id:0})
            const email = user.email
            await orderModels.findByIdAndUpdate({_id:req.params.id},req.body)
            const mailOptions = {
                from: 'team4fwd@gmail.com',
                to: email,
                subject: 'Update On your Order',
                text: `Your order is ${req.body.orderStauts}`
              };
              transporter.sendMail(mailOptions)
            res.json({status:true,message:"Order Updated Successfully"})
        } catch (error) {
            res.json({status:false,message:"Order Not Updated"})
        }
    },
    user_order : async (req,res)=>{
        if (!req.userId) {
           return res.status(404).json({status:false,message:"Please Login"}) 
        }
        try {
            const userOrder = await orderModels.find({user_id:req.userId})
            res.json(userOrder)
        } catch (error) {
            res.json({status:false,message:"There are no Orders"})
        }
    }

}

module.exports = orderController