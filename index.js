const express = require('express');
const app = express();
require('dotenv').config()

const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./ConnectDB/datdabase');
const route = require('./routers/route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use(route);
app.use(express.static(__dirname + '/www'));


app.listen(3000,() =>{
  console.log('server is running');
})
