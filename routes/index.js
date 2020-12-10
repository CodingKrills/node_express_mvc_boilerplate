const express = require('express');
const router = express.Router();


router.get('/', (req,res)=> {
    res.render('index', {
        helloWorld : "Hello World !"
    })
})


module.exports = router;