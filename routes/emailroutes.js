const express = require('express');
const emailrouter = express.Router();
const nodemailer = require("nodemailer");

emailrouter.route('/').post((req, res)=> {
    res
    .status(200)
    .json({
        status: 'success',
    })
});


module.exports = emailrouter;