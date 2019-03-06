var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ffz.ziliotti@gmail.com',
    pass: 'senhaAQUI'
  }
});

var mailOptions = {
  from: 'ffz.ziliotti@gmail.com',
  to: 'fhziliotti@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Fala Bixa, uhull'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});