var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
        //if things aren't wrong
        //call models.messages.get with a callback
        models.messages.get((data) => {
          console.log(data)
        });


    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

