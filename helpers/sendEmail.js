const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;
const nomailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "andrij.karmaza@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nomailerConfig);

const email = {
  to: "andrij.karmaza@gmail.com",
  from: "andrij.karmaza@meta.ua",
  subject: "Test mail",
  html: "<p><strong>Test email</srtong> from localhost</p>",
};

transport
  .sendMail(email)
  .then(() => console.log("Email send sucsess"))
  .catch((err) => console.log(err.message));
