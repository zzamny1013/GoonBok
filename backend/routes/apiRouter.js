import express from "express";
import multer from 'multer';
import UserService from "../services/UserService.js";
import BenefitService from "../services/BenefitService.js";


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "public/img/");
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
});
const uploader = multer({storage:storage});

router.get("/benefit", async function (req, res) {
    res.send(await BenefitService.getBenefitsByParams(req.query));
});

router.get("/user/:uid", function (req, res) {
    res.send(UserService.getUserById(req.params.uid));
});

router.post("/benefit", uploader.single('logo'), (req, res) => {
    const benefit = {
        title: req.body.title,
        company: req.body.company,
        target: req.body.target,
        category: req.body.category,
        detail: req.body.detail,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        icon_path: req.body.icon_path,
        img_path: req.body.img_path,
        link: req.body.link
    };

    BenefitService.addBenefit(benefit);

    //이 부분은 프론트엔드 단에서 해줄 것이라 믿습니다.
    res.redirect('/');
});


export default router;
