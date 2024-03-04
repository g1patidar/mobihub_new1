const nodemailer = require("nodemailer");

const setemail = async (req, res)=>{
    let teataccount = await nodemailer.createTestAccount();

           //connect with the smtp
           const transport = await nodemailer.createTransport({
             host: "smtp.ethereal.Email",
             port: 587,
             auth: {
                user: 'darby.wehner@ethereal.email',
                pass: 'wqxWyhfdFDGXNfGqzP'
            },
           });
           const info = await transport.sendMail({
            from: '"Pankesh Meena" <panku99@email.com>', // sender address
            to: "pankeshmeena977@gmail.com", // list of receivers
            subject: "Hello Pankesh✔", // Subject line
            text: "Hello YT Pankesh", // plain text body
            html: "<b>Hello YT  Pankesh?</b>", // html body
          });

          console.log("Message sent: %s", info.messageId);
          res.json(info);
}

module.exports={
    setemail
}