const mongoose = require('mongoose');
const url= `mongodb://${process.env.DB_PATH}`;

const db = mongoose.connect(url);

mongoose.connection.on('error', (err) => {
    console.log(err);
});
mongoose.connection.once('open',( ) =>{
    console.log("[DB] Connecting Success");
});

module.exports = db;