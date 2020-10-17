const getConnection = require('./database');

getConnection((conn) => {
  conn.query(
    //...
  );
  conn.release();
});