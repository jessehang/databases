var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryString = `select messsages.id, messages.text, messages.roomname, users.username from messages
                          left outer join users on (messages.userid = users.id)
                            order by messages.id desc`;
      db.query(queryString, (err, results) => {
        callback(results);
      }); 
    }, // a function which produces all the messages
    post: function (params, callback) {
      let queryString = `insert into messages(text, userid, roomname)
                         values (?, (select id from users where username = ? limit 1), ?)`;
      db.query(queryString, params, (err, results) => {
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryString = 'select * from users';
      db.query(queryString, (err, results) => {
        callback(results);
      });
    },
    post: function (params, callback) {
      let queryString = 'insert into users(username) values (?)';
      db.query(queryString, params, (err, results) => {
        callback(results);
      });
    }
  }
};