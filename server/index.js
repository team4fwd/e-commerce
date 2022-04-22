// const session = require('express-session');
// const MongoStore = require('connect-mongo');
const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const fileUpload = require('express-fileupload')
const router = require('./routers')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI 

try {
  mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  },
    function(err){if(err){console.log('Error Connection')}else{console.log('Data Base Connected')}}
  )
} catch (error) {
  handleError(error);
}

app.use(cors())
app.use(helmet());
// app.use(session({
//   store: MongoStore.create({mongoUrl:MONGODB_URI}),
//   secret:  process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { path: '/', httpOnly: true, secure: false, maxAge: 1000 * 60 * 60 * 24}
// }));
app.use(fileUpload({
  useTempFiles: true
}))

// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
// parse application/json
// app.use (express.bodyParser()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)



app.listen(PORT,()=>{
  console.log(`Server run on Port ${PORT}`)
})

