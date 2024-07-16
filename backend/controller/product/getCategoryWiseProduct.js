const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async (req, res) => {
    console.log("catwise 1")
    console.log("req", req.body)
    console.log("req2", req.query)
    // try {

    const { category } = req?.body || req?.query
    const product = await productModel.find({ category })
    console.log("catwise 2")
    res.json({
        data: product,
        message: "Product",
        success: true,
        error: false
    })
    // } catch (err) {
    //     res.status(400).json({
    //         message: err.message || err,
    //         error: true,
    //         success: false
    //     })
    // }
}

module.exports = getCategoryWiseProduct