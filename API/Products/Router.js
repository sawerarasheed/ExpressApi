const app = require('express')
const router = app.Router()
const {getAllProducts,getProductByBrand,getProductByCategory, getProductById , getProductByName, createProduct, updateProduct, deleteProduct} = require('./Controller')

router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-id', getProductById)
router.get('/get-product-by-name', getProductByName)
router.put('/update-product', updateProduct)
router.delete('/delete-product', deleteProduct)
router.post('/create-product', createProduct)
router.get('/get-product-by-brand', getProductByBrand)
router.get('/get-product-by-category', getProductByCategory)

  module.exports = router