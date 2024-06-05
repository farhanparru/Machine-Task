const mongoose = require('mongoose');

const OTPschema = new mongoose.Schema({
   userId: String, 
   otp: String,
   timestamp: { type: Date, default: Date.now }
});

const OTP = mongoose.model('otp', OTPschema); 
module.exports = OTP;