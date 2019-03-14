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
    post: function (req, res) {
      // var postCB = () => {

      // }
      // models.messages.post(postCB);
      // console.log(req, '           <-- request');
      // console.log(res, '           <-- response');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
    },
    post: function (req, res) {}
  }
};

