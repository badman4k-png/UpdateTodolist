const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('tb_members',memberSchema);