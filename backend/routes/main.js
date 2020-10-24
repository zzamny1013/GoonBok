import express from 'express';

const router = express.Router();

router.get('/',function(req,res){
        res.render('index.html')
});

router.get('/about',function(req,res){
        res.render('about.html');
});

export default router;