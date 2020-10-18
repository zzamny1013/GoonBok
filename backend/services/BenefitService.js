import getConnection from "../routes/db/database";

const BenefitService = {};

BenefitService.getBenefits = () => {
    let benefits = null;

    getConnection((conn) => {
        conn.query("SELECT * FROM benefit", (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                benefit = result;
            }
        });
        conn.release();
    });

    return benefit;
};

BenefitService.getBenefitById = (id) => {
    let benefit = null;

    getConnection((conn) => {
        conn.query("SELECT * FROM benefit WHERE id = " + id, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                benefit = result;
            }
        });
        conn.release();
    });

    return benefit;
};

BenefitService.addBenefit = (benefit) => {
    getConnection((conn) => {
        conn.query("INSERT INTO benefit set ?", benefit, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
        conn.release();
    });
};

module.exports = BenefitService;
