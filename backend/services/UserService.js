import getConnection from "../routes/db/database";

const UserSerivce = {};

UserService.getUserById = (id) => {
    let user = null;

    getConnection((conn) => {
        conn.query("SELECT * FROM user WHERE id = " + id, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                user = result;
            }
        });
        conn.release();
    });

    return user;
};

module.exports = UserService;
