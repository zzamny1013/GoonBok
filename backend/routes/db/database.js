//const mysql = require("mysql");
import mysql from 'mysql2/promise';
//const config = require("./dbconfig.json");
import config from './dbconfig.js';

//let config = fs.readFileSync('./dbconfig.json', 'utf8');

let pool = mysql.createPool(config);

async function getConnection(callback) {
    await pool.getConnection(async function (err, conn) {
        if (!err) {
            callback(conn);
        }
    });
}

export default getConnection;