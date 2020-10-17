const mysql = require('mysql');
const config = require('./dbconfig.json');

let pool = mysql.createPool(config);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
      callback(conn);
    }
  });
}

module.exports = getConnection;