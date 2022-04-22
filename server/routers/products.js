const products = require('express').Router()
const {userAuth,adminAuth} = require('../middleware/auth')
const productsController = require('../controllers/products')

products.get('/',productsController.index)
products.get('/:id',productsController.details)
products.post('/create',userAuth,adminAuth,productsController.create)
products.put('/:id',userAuth,adminAuth,productsController.edit)
products.delete('/:id',userAuth,adminAuth,productsController.delete)





module.exports = products