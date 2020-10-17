const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const { connect } = require('http2');
//const models = require("../models");

router.get('/sign_up', function(req, res, next) {
  //res.render("user/signup");
});


router.post("/sign_up", async function(req,res,next){
    let body = req.body;

    let id = body.id;
    let inputPassword = body.password;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
    let email = body.email;
    let name = body.name;
    let tel = body.tel;
    let anak = body.anak; //army? navy? airforce? kookbangboo?
    let is_soldier = body.is_soldier; // ganboo or byungsa?

    //db에 저장하는 부분
    
	

    //res.redirect("/user/sign_up");
})

router.get('/', function(req, res, next) {
    let session = req.session;

    /*res.render("user/login", {
        session : session
    });*/
});

// 로그인 POST
router.post('/', async function(req,res,next){
    let body = req.body;

    let result = await models.user.findOne({
        where: {
            email : body.userEmail
        }
    });

    let dbPassword = result.dataValues.password;
    let inputPassword = body.password;
    let salt = result.dataValues.salt;
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    if(dbPassword === hashPassword){
        console.log("비밀번호 일치");
        // 세션 설정
        req.session.email = body.userEmail;
    }
    else{
        console.log("비밀번호 불일치");
    }
    //res.redirect("/user/login");
});

module.exports = router;