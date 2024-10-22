// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')
// // const session = require("express-session");

// const app = express()
// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         // origin: 'https://mymernecomm-frontend.onrender.com',
//         credentials: true
//     }
// ))
// // app.set("trust proxy", 1)
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api", router)

// const PORT = 8080 || process.env.PORT


// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("connnect to DB")
//         console.log("Server is running " + PORT)
//     })
// })

// app.use(session({
//     secret: process.env.sessionSecret, // your secret key to check session
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 604800000, //one week(1000*60*60*24*7)
//         sameSite: "none",
//         secure: true
//     },
//     store: connectDB
// }));

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'https://mymernecomm-frontend.onrender.com',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = 8080 || process.env.PORT


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("connnect to DB")
        console.log("Server is running " + PORT)
    })
})