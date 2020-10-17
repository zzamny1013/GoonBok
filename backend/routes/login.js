const express = require('express');
const router = express.Router();
const crypto = require('crypto');
//const models = require("../models");

router.get('/sign_up', function(req, res, next) {
  //res.render("user/signup");
});


router.post("/sign_up", async function(req,res,next){
    let body = req.body;

    let inputPassword = body.password;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

	//models안에 user에다가 사용자 정보들을 담음. 만약 mysql로 연동한다면 이 부분 db와 연동되도록 바꿔야함.
    let result = models.user.create({
        name: body.userName,
        email: body.userEmail,
        password: hashPassword,
        salt: salt
    });
	

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