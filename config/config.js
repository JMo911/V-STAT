require('dotenv').config();

module.exports = {

  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "port": process.env.MYSQL_PORT,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWS_USER,
    "password": process.env.JAWS_PASSWORD,
    "database": process.env.JAWS_DATABASE,
    "host": process.env.JAWS_HOST,
    "dialect": "mysql",
    "port": process.env.JAWS_PORT
  }
}