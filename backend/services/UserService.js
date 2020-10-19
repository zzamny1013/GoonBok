import getConnection from "../routes/db/database";
import users from '../test/users.json';

const UserSerivce = {};

UserService.getUserById = (uid) => {
    let user = null;

    /*getConnection((conn) => {
        conn.query("SELECT * FROM user WHERE uid = " + uid, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                user = result;
            }
        });
        conn.release();
    });*/

    const users = JSON.parse(users);
    user = users[0];

    return user;
};

UserService.addUser = (user) => {
    let salt = Math.round(new Date().valueOf() * Math.random()) + "";
    let hashPassword = createHash("sha512")
        .update(user.pw + salt)
        .digest("hex");
    user.pw = hashPassword;
    user.salt = salt;

    getConnection((conn) => {
        conn.query("INSERT INTO benefit set ?", user, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
        conn.release();
    });
};

module.exports = UserService;
