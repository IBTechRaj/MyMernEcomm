const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        var token = req.cookies?.token
        console.log('req1', req.cookies)
        // console.log("token1", token)



        const authHeader = req.headers['authorization']; // Get the Authorization header
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        token = authHeader.split(' ')[1]; // Extract the token (after "Bearer")
        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }





        console.log('token - authToken   1', token)
        if (!token) {
            return res.status(200).json({
                message: "Please Login!...!",
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            console.log(err)
            console.log("decoded", decoded)
            console.log('token - authToken Verify  2', token)

            if (err) {
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
        });


    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        })
    }
}


module.exports = authToken