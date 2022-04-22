const cateogry = require('express').Router()
const {userAuth,adminAuth} = require('../middleware/auth')
const cateogryController = require('../controllers/cateogry')

cateogry.get('/',cateogryController.index)
cateogry.get('/:id',userAuth,adminAuth,cateogryController.details)
cateogry.post('/add',userAuth,adminAuth,cateogryController.add)
cateogry.put('/:id',userAuth,adminAuth,cateogryController.edit)
cateogry.delete('/:id',userAuth,adminAuth,cateogryController.delete)




module.exports = cateogry