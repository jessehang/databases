var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //Promise??
      //err, response??

      db.dbConnection.query('select m.text, rooms.name, users.username from messages as m inner join users' + 
        'where users.id = m.user inner join rooms where rooms.id = m.room_name;')
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

