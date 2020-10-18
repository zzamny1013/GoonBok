import { Router } from "express";
import User from "./db/models/user";
import Benefit from "./db/models/benefit";
import getConnection from "./db/database";
import UserService from "../services/UserService";
import BenefitService from "../services/BenefitService";

const router = Router();

router.get("/benefit", function (req, res) {
    return JSON.stringify(BenefitService.getBenefits());
});

router.get("/user/:id", function (req, res) {
    return JSON.stringify(UserService.getUserById(req.params.id));
});

router.get("/benefit/:id", function (req, res) {
    return JSON.stringify(BenefitService.getBenefitById(req.params.id));
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
