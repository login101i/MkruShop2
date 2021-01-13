import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Products from '../models/productModel.js'


// import {
//     getProducts,
//     getProductById,
//     deleteProduct,
//     createProduct,
//     updateProduct,
//     createProductReview,
//     getTopProducts,
// } from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

// Fetch all products 
// Route  GET /api/products
// Access Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Products.find({})
    res.json(products)
}))

// Fetch single product
// Route  GET /api/product/:id
// Access Public
router.get('/:id', asyncHandler(async(req, res) => {
    const product =await Products.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Nie odnaleziono produktu koleżko.')
    }

}))

// router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//     .route('/:id')
//     .get(getProductById)
//     .delete(protect, admin, deleteProduct)
//     .put(protect, admin, updateProduct)

export default router
