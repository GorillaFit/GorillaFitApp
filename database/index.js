var mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'gorilla_fit'
});

Promise.promisifyAll(connection);

module.exports.selectAll = function (callback) {
  connection.query('SELECT * FROM user where ', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.isNewUser = function (username, callback) {
  connection.query(`SELECT * FROM USER where USERNAME = '${username}'`, function (err, results, fields) {
    if (results.length === 0 ) {
      callback(null, results);
    } else {
      callback({err: 'this user already exists'}, null);
    }
  });
};

module.exports.isExistingUser = function (username, callback) {
  connection.query(`SELECT * FROM USER where USERNAME = '${username}'`, function (err, results, fields) {
    if (results.length === 0 ) {
      callback({err: 'this user doesnt exist!'}, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.findUserByID = function (id, callback) {
  connection.query(`SELECT * FROM USER where id = ${id}`, function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.getHealthHistory = function (username, callback) {
  const healthHistory = {};
  connection.query(`select id from user where username = '${username}';`, (err, results, fields)=>{
    id = results[0]['id'];
    connection.query(`select * from food where userid = '${id}';`, (err, results, fields)=>{
      healthHistory.food = results;
      connection.query(`select * from exercise where userid = '${id}';`, (err, results, fields)=>{
        healthHistory.exercise = results;
        callback(null, healthHistory);
      });
    });
  });
};





