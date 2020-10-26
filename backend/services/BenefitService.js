import {getConnection} from "./db/database.js";

const BenefitService = {};

BenefitService.getBenefitsByParams = async (params) => {
    const conditions = [];
    const values = [];
    let result = [];

    for (let p in params) {
        if(p != "now"){
            conditions.push(p + '=?');
            values.push(params[p]);
        }
    }

    //if (req.query.name) { conditions.push(`name=?`); values.push(req.query.name); }
    //if (req.query.colour) { conditions.push(`colour=?`); values.push(req.query.colour); }
    //if (req.query.size) { conditions.push(`size=?`); values.push(req.query.size); }

    /*getConnection(async (conn) => {
        await conn.query("SELECT * FROM benefit " + (conditions.length ? ("WHERE " + conditions.join(" AND ")) : ""),
            values,
            (err, ret) => {
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    result = ret;
                    console.log("kk");
                }
            });
        conn.release();
    });*/

    //let pool = mysql.createPool(dbconfig);
    //let connection = await pool.getConnection(async conn => conn);
    //result = await connection.query("SELECT * FROM benefit " + (conditions.length ? ("WHERE " + conditions.join(" AND ")) : ""), values);
    //connection.release();

    result = await getConnection("SELECT * FROM benefit " + (conditions.length ? ("WHERE " + conditions.join(" AND ")) : ""), values);

    //result에서 현재인지 과거인지 예정인지 걸러내는 코드(변수 이름은 now라고 가정)
    const date = new Date();

    const data = result[0].filter(b => {
        const arr1 = b.start_date.split('-');
        const arr2 = b.end_date.split('-');

        const start = new Date(arr1[0], parseInt(arr1[1])-1, arr1[2]);
        const end = new Date(arr2[0], parseInt(arr2[1])-1, arr2[2]);

        switch(params.now){
            case "now":
                return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
                break;
            case "past":
                return end.getTime() < date.getTime();
                break;
            case "future":
                return start.getTime() > date.getTime();
        }
    })
    
    return data;
};

BenefitService.addBenefit = async (benefit) => {
    /*getConnection((conn) => {
        conn.query("INSERT INTO benefit set ?", benefit, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
        conn.release();
    });*/
    //await getConnectionForAdd("INSERT INTO benefit set ?", benefit);
    await getConnection("INSERT INTO benefit set ?", benefit);
};

export default BenefitService;
