const express = require('express')
const router = express.Router(); 

const products = require('../Products')


router.get('/products', (req,res)=> {

    res.json(products)

})



router.get('/products/:id', (req,res)=> {
    
    const product = products.find( p => p._id == req.params.id );

    res.json(product)

})



module.exports = router