const { Collection } = require('mongodb');
const mongoose = require('mongoose');
const collection = 'Data_Register';
const memberSchema = mongoose.Schema({
    Username: String,
    name: String,
    email: String,
    password: String,
    phone: String
},{
    timestamps: true,
    versionKey: false,
    collection
})
module.exports = mongoose.model(collection,memberSchema);