const express = require('express')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')
const SendEmail = require('./Nodemailer')
let app = express()
const port = 3000


SendEmail('Hello Usman is Testing','Hello Usman how are you!!?')
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL_USERNAME,
//         pass: process.env.MAIL_PASSWORD,

//     }
// })


// let mailOptions = {
//     from: process.env.MAIL_USERNAME,
//     to: 'usmannajeebmalik@gmail.com',
//     subject: 'Testing',
//     text: 'Hello usman Najeeb'
// };


// transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//         console.log("Error " + err);
//     } else {
//         console.log("Email sent successfully");
//     }
// });






app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})