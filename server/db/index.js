let Sequelize = require('sequelize');
let orm = new Sequelize('chat', 'root', 'track333');

let User = orm.define('User', {
    username: Sequelize.STRING
});

let Message = orm.define('Message', {
    text: Sequelize.STRING,
    roomname: Sequelize.STRING
})

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;


//raw sql
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// var connection = mysql.createConnection({
//     user: 'root',
//     password: 'track333',
//     database: 'chat'
// });

// connection.connect();

// module.exports = connection;