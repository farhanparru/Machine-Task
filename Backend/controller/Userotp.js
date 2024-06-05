const userSchema = require('../model/usermodel')
const OTPschema = require("../model/Otpmodel");

module.exports = {

// user otp
 otp:async (req, res) => {
 const { otp } = req.body;
  if (otp.length !== 4) {
    return res.status(400).send('OTP must be 4 digits');  
  }  
    try {

    const existOTP = await OTPschema.findOne({otp})
    if(existOTP){
     return res.status(400).send('OTP Already entered')   
    }
      const newOTP = new OTPschema({ otp });
      await newOTP.save();
      res.status(201).send('OTP saved successfully');
    } catch (error) {
      console.log(error);
      res.status(400).send('Error saving OTP'); 
    }
  },

// user basic Inform

  user:async(req,res)=>{
  const {username, email} = req.body

  try {
    const existuser = await userSchema.findOne({email})
    if(existuser){
      return res.status(400).send('This user alredy exis')
    }
    const newUser = new userSchema({username,email})
    await newUser.save()
    
    res.status(201).json({
      message: 'User successfully signed up',
      user: newUser
  });
  } catch (error) {
    res.status(400).send('Invalid user Information')
  }
  },


// Last get Information all 
  InfomUser:async(req,res)=>{
   try {

    const user1 = req.body
    const otp1 = req.body

    const user = await userSchema.find(user1)
    const otp = await OTPschema.find(otp1)
    console.log(otp);
    
    if(!user){
      return res.status(404).send('User note a found')
    }

    if(!otp){
      return res.status(404).send('Otp note a found')
    }
    
     res.status(200).json({
      message: 'User information retrieved successfully',
      user,
      otp
     })

   } catch (error) {
    res.status(500).send('An error occurred while retrieving user information.');
    
   }
  }


};
