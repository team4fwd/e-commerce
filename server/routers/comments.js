const commentRouter = require('express').Router()
const {userAuth} = require('../middleware/auth')
const commentCtrl = require('../controllers/comments')


commentRouter.post('/',userAuth,commentCtrl.add)
commentRouter.get('/:id',commentCtrl.index)




module.exports = commentRouter