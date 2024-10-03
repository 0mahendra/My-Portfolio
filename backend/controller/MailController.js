const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,

  
    auth: {
        user: 'mahendra0902001@gmail.com',
        pass: 'sbdiogeprxkvkngf'
    },
});

const sendMail = asyncHandler(async (req, res) => {
    console.log("Request received to send mail");

    const { name, email, data } = req.body;

    // Ensure that 'from', 'subject', and 'text' are strings
    var mailOptions = {
        from: email, // The sender's email
        to: "mahendra09022001@gmail.com", // Your email
        subject: `Message from ${name}`, // A proper subject
        text: data, // The content of the email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending mail:", error);
            return res.status(500).json({ message: "Failed to send email", error });
        } else {
            console.log("Email sent:", info.response);
            return res.status(200).json({ message: "Mail has been sent successfully!" });
        }
    });
});

module.exports = { sendMail };
