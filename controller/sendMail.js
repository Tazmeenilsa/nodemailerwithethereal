const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    // connect with smtp
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'ford.okuneva@ethereal.email',
            pass: '5Q6Sh4n4MbxvTmKgE1'
        },
    });

    let info = await transporter.sendMail({
        from: '"Tazmeen Ilsa 👻" <ford.okuneva@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
console.log("Message sent : %s", info.messageId)
    res.json(info)
}




module.exports = sendMail