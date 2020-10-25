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

router.get("/benefit", function (req, res) {
    res.send(BenefitService.getBenefitsByParams(req.query));
});

router.get("/user/:uid", function (req, res) {
    res.send(UserService.getUserById(req.params.uid));
});

router.get("/benefit/:bid", function (req, res) {
    res.send(BenefitService.getBenefitById(req.params.bid));
});

router.post("/benefit", uploader.single('logo'), (req, res) => {
    const benefit = {
        name: req.body.name,
        company: req.body.company,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
    };

    BenefitService.addBenefit(benefit);
});

router.post("/", function (req, res) {});

export default router;
