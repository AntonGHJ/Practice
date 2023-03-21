const express = require('express')
const Property = require('../models/Property')
const router = express.Router({mergeParams:true})

router.get('/', async (req, res) => {
    try {
        const list = await Property.find()
        res.status(200).send(list)
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
})
module.exports = router