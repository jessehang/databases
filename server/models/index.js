var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select messages.message_text, rooms.room_name, users.username from messages, rooms, users where messages.room = rooms.id and messages.user = users.id;', (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        })
    }, // a function which produces all the messages
    post: function (callback, dataObj) {
      var newMsgObj = {};

      var queryCB = (err, result, field, type) => {
        if (err) {
          callback(err);
        } else if (result.length === 0) {
          if (!type) {
            db.query(`insert into rooms (room_name) value (${dataObj.roomname})`, queryCB(err, result, field, 'room'));
          } else {

          }
        } else {
          if (!type) {
            newMsgObj.roomname = result[0].room_name;
            db.query(`select id from users where username = ${dataObj.username}`, queryCB(err, result, field, 'user'))
          } else {
            // newMsgObj.username = result[0].username;

          }
        }
      }



      db.query(`select id from rooms where rooms.room_name = ${dataObj.roomname};`, queryCB);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // if (err) {
      //   console.log(err);
      // } else {
      //   console.log('should be after')
      //   console.log(db.query('select username from users;'))
      // }
    },
    post: function () {}
  }
};