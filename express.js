const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: "avksentiy.vitold@gmail.com", // generated ethereal user
        pass: "****" // generated ethereal password
    }
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/sendMessage', async function (req, res) {
    let {name, email} = req.body

    let info = await transporter.sendMail({
        from: 'avksentiy.vitold@gmail.com', // sender address
        to: "motivi.shop@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: `<b>письмо</b> 
            <div>name: ${name}</div>
            <div>email: ${email}</div>`
    });
    req.send("ggg");
});

app.listen(3010, function () {
    console.log('Example app listening on port 3000!');
});