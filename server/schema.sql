CREATE DATABASE IF NOT EXISTS chat;

USE chat;

DROP TABLE IF EXISTS users, rooms, messages;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  primary key (id)
);

CREATE TABLE IF NOT EXISTS rooms (
  id int NOT NULL AUTO_INCREMENT,
  room_name varchar(20),
  primary key (id)
);

CREATE TABLE IF NOT EXISTS messages (
  id int NOT NULL AUTO_INCREMENT,
  message_text VARCHAR(255),
  user int,
  room int,
  time_created datetime,
  primary key (id)
);

ALTER TABLE messages
ADD foreign key (user) references users(id);

ALTER TABLE messages
ADD foreign key (room) references rooms(id);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

