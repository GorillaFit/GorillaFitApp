var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'gorilla_fit'
});

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

module.exports.getNutritionHistory = function (id, callback) {
  connection.query(`SELECT * FROM USER where id = ${id}`, function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
