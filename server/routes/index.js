const express = require('express')
const router = express.Router({mergeParams:true})

router.use('/auth', require('./auth.routes'))
router.use('/property', require('./property.routes'))
router.use('/image', require('./image.routes'))
router.use('/carEdit', require('./car.routes'))
router.use('/user', require('./user.routes'))
router.use('/car', require('./car.routes'))
router.use('/message', require('./message.routes'))


module.exports = router