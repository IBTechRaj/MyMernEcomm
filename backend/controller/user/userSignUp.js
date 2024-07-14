const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res) {
    // console.log("u model", userModel.data)
    // const { email, password, name } = req.body
    // const hashPassword = await bcrypt.hashSync(password, salt);
    // const payload = {
    //     ...req.body,
    //     role: "GENERAL",
    //     password: hashPassword
    // }

    // const userData = new userModel(payload)
    // console.log("u model", userModel.data)
    try {
        const { email, password, name } = req.body
        // console.log("user2", user)
        // console.log("req.body", req.body)

        const user = await userModel.findOne({ email })



        if (user) {
            throw new Error("Already user exits.")
        }

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }
        if (!name) {
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        console.log('u dat', userData)
        const saveUser = await userData.save()
        // console.log('s u', saveUser)

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!!"
        })


    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController