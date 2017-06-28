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
  connection.queryAsync(`select id from user where username = '${username}';`)
  .then((id)=>{
    connection.queryAsync(`select * from food where username = '${id}';`)
    .then((allFood)=>{
      healthHistory.food = allFood;
    });
    connection.queryAsync(`select * from exercise where username = '${id}';`)
    .then((allExercise)=>{
      healthHistory.exercise = allExercise;
      callback(healthHistory);
    });
  });
};






