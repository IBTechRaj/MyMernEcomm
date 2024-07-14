const mongoose = require("mongoose")


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (err) {
        console.log('errr', err)
    }
}

module.exports = connectDB