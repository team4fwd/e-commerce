const order = require('express').Router()
const {userAuth,adminAuth} = require('../middleware/auth')
const orderController = require('../controllers/order') 


order.post('/',userAuth,orderController.add)
order.get('/userorder',userAuth,orderController.user_order)
order.get('/',userAuth,adminAuth,orderController.all)
order.put('/:id',userAuth,adminAuth,orderController.changeStatus)









module.exports = order