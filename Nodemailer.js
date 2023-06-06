const nodemailer = require('nodemailer')
const SendEmail = (Subject, Text) => {


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,

        }
    })


    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        
        to: 'usmannajeebmalik@gmail.com',
        subject: Subject,
        text: Text
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });





}

module.exports = SendEmail