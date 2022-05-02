<<<<<<< HEAD
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

=======
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

>>>>>>> 4d3acc7379925808a7fdf2c53b279b16e846718e
module.exports = mongoose.model(collection,memberSchema);