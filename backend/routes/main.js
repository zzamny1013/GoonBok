const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
        res.render('index.html')
});

router.get('/about',function(req,res){
        res.render('about.html');
});

module.exports = router;