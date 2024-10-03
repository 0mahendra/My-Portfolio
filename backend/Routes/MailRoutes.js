const express = require("express");

const router = express.Router();

const {sendMail} = require("../controller/MailController");
console.log("requse t comes");

router.route("/").post(sendMail);

module.exports = router;