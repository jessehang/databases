var models = require('../models');
let bluebird = require('bluebird');

let userFields = ['username'];
let messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete((err, results) => {
          res.json(results);
        })
      // models.messages.get((err, results) => {
      //   res.json(results);
      // })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findOrCreate({ username: req.body[username] })
        .complete((err, user) => {
          let params = {
            text: req.body[text], 
            userid: user.id, 
            roomname: req.body[roomname]
          };
          Message.create(params) 
          .complete((err, results) => {
            res.sendStatus(201);
          })
        })
          // let params = [req.body[text], req.body[username], req.body[roomname]]
      // models.messages.post((err, results) => {
      //   res.json(results);
      // })
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .complete((err, results) => {
          res.json(results);
        })
      // models.users.get((err, results) => {
      //   res.json(results);
      // })
    },
    post: function (req, res) {
      User.create({ username: req.body[username] })
        .complete((err, result) => {
          res.sendStatus(201);
        });
      // let params = [req.body[username]]
      // models.messages.post((err, results) => {
      //   res.json(results);
      // })
    }
  }
};

