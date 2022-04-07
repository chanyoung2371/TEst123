const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
require('dotenv').config({ path : ".env" });

const SessionOption = {
  secret : process.env.envSECRET,
  resave: false,
  saveUninitialized: true,
  store : new MysqlStore({
    host: process.env.DB_host,
    prot: process.env.DB_port,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
  })
}

const Session = session(SessionOption);

module.exports =  Session;