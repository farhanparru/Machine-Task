const express = require('express')
const router = express.Router()
const otpCtrl = require('../controller/Userotp')

router

.post('/otp', otpCtrl.otp)
.post('/user', otpCtrl.user)
.get('/Inform',otpCtrl.InfomUser)






module.exports = router