const express = require('express');
const expressSession = require("express-session");
const app = express();
require('dotenv').config()

const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./ConnectDB/datdabase');
const route = require('./routers/route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(route);
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { }
})); 
app.use('./api', require('./routers/route'))
app.use(express.static(__dirname + '/www'));

app.listen(3000, () => {
  console.log('server is running');
})