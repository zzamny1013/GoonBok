import getConnection from './database';

getConnection((conn) => {
  conn.query(
    //...
  );
  conn.release();
});