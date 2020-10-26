import {getConnection} from "../routes/db/database.js";
//import users from '../test/users.js';
//const fs = require('fs');
//import fs from 'fs';

const UserService = {

    getUserById: async (uid) => {
        let result = await getConnection("SELECT * FROM user WHERE uid = ?", uid);
        return result;
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
