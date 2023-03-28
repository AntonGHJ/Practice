const express = require('express')
const User = require('../models/User')
const router = express.Router({mergeParams:true})
const auth = require('../middleware/auth.middleware')


//patch для изменения данных пользователя, get для получения списка пользователей
router.patch('/:userId', async (req, res) => {
    try {
        const { userId } = req.params

        if(userId) {
            const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
            res.send(updatedUser)
        } else{
            res.status(401).json({
                message:'Unauthorized 5'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
})

router.get('/', async(req, res) => {
    try {
        const list = await User.find()
        res.status(200).send(list)
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
})

module.exports = router