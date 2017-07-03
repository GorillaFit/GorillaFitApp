var mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b5ddec3257ffb1',
  password: 'd1ca662c',
  database: 'heroku_0b190ccc72dbab6'
});

Promise.promisifyAll(connection);

module.exports.selectAll = function (callback) {
  connection.query('SELECT * FROM user', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.isNewUser = function (username, callback) {
  connection.query(`SELECT * FROM user WHERE username = '${username}'`, function (err, results, fields) {
    console.log(err, results, fields)
    if (results.length === 0 ) {
      callback(null, results);
    } else {
      callback({err: 'this user already exists'}, null);
    }
  });
};

module.exports.isExistingUser = function (username, callback) {
  connection.query(`SELECT * FROM user WHERE username = '${username}'`, function (err, results, fields) {
    if (results.length === 0 ) {
      console.log('this user dont exist');
      callback({err: 'this user doesnt exist!'}, null);
    } else {
      console.log('this user DO exist');
      callback(null, results);
    }
  });
};

module.exports.findUserByID = function (id, callback) {
  connection.query(`SELECT * FROM user WHERE id = ${id}`, function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getFoodsFromUserOnDate = function (username, date, callback) {
 module.exports.findIDByUsername(username, (err, results)=>{
    connection.query(`SELECT * FROM food WHERE userid = "${results[0].id}" AND date = "${date}";`, function (err, results, fields) {
      callback(null, results);
    });
  });
};

module.exports.getHealthHistory = function (username, callback) {
  const healthHistory = {};
  connection.query(`SELECT id FROM user WHERE username = '${username}';`, (err, results, fields)=>{
    id = results[0]['id'];
    connection.query(`SELECT * FROM food WHERE userid = '${id}';`, (err, results, fields)=>{
      healthHistory.food = results;
      connection.query(`SELECT * FROM exercise WHERE userid = '${id}';`, (err, results, fields)=>{
        healthHistory.exercise = results;
        callback(null, healthHistory);
      });
    });
  });
};

module.exports.insertUser = function (username, hash, callback) {
  connection.query(`INSERT INTO user (username, hash) VALUES ('${username}', '${hash}');`, (err, results, fields)=>{
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.findIDByUsername = function (username, callback) {
  connection.query(`SELECT id FROM user WHERE username = '${username}'`, function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.insertFoodAndDataForUser = function (username, date, foodItem, calories, proteins, fat, carbs, meal, callback) {
  module.exports.findIDByUsername(username, (err, results)=>{
    connection.query(
      `Insert into food (userid, food_name, meal_time, calories, proteins, total_fat, carbohydrates, date) VALUES ("${results[0].id}", "${foodItem}", "${meal}", "${calories}", "${proteins}", "${fat}", "${carbs}", "${date}");`, function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  })
}

module.exports.insertFood = function (username, food, callback) {
  connection.query(`select id from user where username = '${username}';`, (err, results, fields)=>{
    id = results[0]['id'];
  });
};






