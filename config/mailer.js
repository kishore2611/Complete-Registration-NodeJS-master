const nodemailer = require("nodemailer");

// Email function
// const transporter = nodemailer.createTransport({
//     service: "appsstaging",
//     host: "server.appsstaging.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "noreply@server.appsstaging.com",
//         pass: "Technado@12345",
//     },
// });

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6651dbb465d8d9",
    pass: "4e6608fa083538"
  }
});

const sendEmail = (email, verificationCode, subject) => {
  const mailOptions = {
    from: "noreply@server.appsstaging.com",
    to: email,
    subject: subject,
    html: `<p>Your verification code is ${verificationCode} </p>`,
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = { sendEmail };
