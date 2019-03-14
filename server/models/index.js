var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //Promise??
      //.then??
      //err, response??

      //us db.js somehow
      db.query('select messages.message_text, rooms.room_name, users.username from messages, rooms, users where messages.room = rooms.id and messages.user = users.id;', (err, result) => {
          if (err) {
            callback(err);
          } else {
            callback(result);
          }
        })
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.dbConnection.query('select username from users;')
    },
    post: function () {}
  }
};