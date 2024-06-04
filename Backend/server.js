const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./router/userRouter')



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connecte

mongoose.connect("mongodb://127.0.0.1:27017/Deteails", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
   console.log(`Database Error ${err}`);
})


// frondent connecte
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  })); 

  app.use('/api/users',userRouter)
 
  


app.listen(PORT,()=>{
    console.log('Server is Runing port 4000');
})
