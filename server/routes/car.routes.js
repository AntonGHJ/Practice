const express = require('express')
const Car = require('../models/Car')
const {check, validationResult} = require('express-validator')
const auth = require('../middleware/auth.middleware')

const router = express.Router({mergeParams:true})


router.post('/createCar', auth, [
    
    //check('name', 'Min length - 3 symbols').isLength({min:3}),
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                error: {
                    message: 'INVAID_DATA',
                    code: 400, 
                    //errors: errors.array()
                }
            })
        }
        const {name, engine, productionYear, mileage, price} = req.body
       
       const newCar = await Car.create({
        ...req.body,
        
       })

        res.status(201).send({ carId: newCar._id })


    } catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
}])

//patch для изменения данных пользователя, get для получения списка пользователей
router.patch('/:carId', auth, async (req, res) => {
    try {
        const { carId } = req.params        
        const updatedCar = await Car.findByIdAndUpdate(carId, req.body, {new: true})
        res.send(updatedCar)
    }
     catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
})

router.get('/', async(req, res) => {
    try {
        const list = await Car.find()
        res.status(200).send(list)
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка на сервере'
        })
    }
})
router.delete('/:carId', auth, async (req, res) => {
    try {
        const { carId } = req.params;
        const result = await Car.findByIdAndDelete(carId);
        if (!result) {
          return res.status(404).json({
            message: 'Машина не найдена'
          });
        }
        res.status(200).json({
          message: 'Машина успешно удалена'
        });
      } catch (error) {
        res.status(500).json({
          message: 'На сервере произошла ошибка. Попробуйте позже'
        });
      }
  })
module.exports = router