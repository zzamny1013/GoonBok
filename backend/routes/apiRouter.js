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

router.get("/benefit/:bid", function (req, res) {
    res.send(BenefitService.getBenefitById(req.params.bid));
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

    /*const benefit = {
        title: "빕스가 대한민국 군인 여러분을 응원합니다.",
        company: "VIPS",
        target: "3",
        category: "eat",
        detail: "30%할인",
        start_date: "2020-10-01",
        end_date: "2022-09-30",
        icon_path: null,
        img_path: null,
        link:  "https://www.ivips.co.kr:7002/event/evtHotEventPrtTpl.asp?eventkey=247&pageseq=1"
    };*/

    BenefitService.addBenefit(benefit);
    res.redirect('/');
});


export default router;
