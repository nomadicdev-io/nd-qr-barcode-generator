const express = require('express');
const emailrouter = express.Router();
const sgMail = require('@sendgrid/mail');

emailrouter.route('/').post((req, res)=> {

    sgMail.setApiKey('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')
    const msg = {
        to: 'alanthegamer@gmail.com', // Change to your recipient
        from: 'nomadicdev.io@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

    res
    .status(200)
    .json({
        status: 'success',
    })
});


module.exports = emailrouter;