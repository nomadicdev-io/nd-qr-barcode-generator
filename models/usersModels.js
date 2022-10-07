const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email Already exist!']
    },
    phone: {
        type: String,
        required: true,
        unique: [true, 'Phone Already exist!']
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    accesscode: {
        type: String,
        required: false,
        default: ''
    },
    qrcode: {
        type: String,
        required: false,
        default: ''
    },
    isValid: {
        type: Boolean,
        required: false,
        default: true
    },
    isExpired: {
        type: Boolean,
        required: false,
        default: false
    }
})

const Users = mongoose.model('Users', userScheme);


module.exports = Users;