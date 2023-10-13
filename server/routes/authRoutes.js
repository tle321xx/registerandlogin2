const express = require('express')
const router = express.Router()
const { test, registerController, loginController, getProfile } = require('../controllers/authControllers')

router.get('/', test)

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/profile', getProfile)



module.exports = router