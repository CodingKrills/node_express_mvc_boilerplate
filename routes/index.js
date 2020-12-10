const express = require('express');
const router = express.Router();


router('/', (req,res)=> {
    res.json('Hello World')
})


module.exports = router;