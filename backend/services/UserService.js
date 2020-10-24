import getConnection from "../routes/db/database.js";
import users from '../test/users.js';
//const fs = require('fs');
//import fs from 'fs';

const UserService = {

    getUserById: (uid) => {
        //let users = fs.readFileSync('../test/users.json', 'utf8');
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

        //const users_array = JSON.parse(users);
        //user = users_array[0];
        console.log(users.users[0]);
        return users.users[0];
    },

    addUser: (user) => {
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
    }
};

export default UserService;
