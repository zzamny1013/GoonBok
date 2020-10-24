import express from "express";
import UserService from "../services/UserService.js";
import BenefitService from "../services/BenefitService.js";

const router = express.Router();

router.get("/benefit", function (req, res) {
    res.send(JSON.stringify(BenefitService.getBenefits()));
});

router.get("/user/:uid", function (req, res) {
    res.send(UserService.getUserById(req.params.uid));
});

router.get("/benefit/:bid", function (req, res) {
    res.send(JSON.stringify(BenefitService.getBenefitById(req.params.bid)));
});

router.post("/benefit", (req, res) => {
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
