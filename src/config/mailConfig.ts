
import nodemailer from 'nodemailer';
import { config } from "dotenv";
config();

const mailTransport = nodemailer.createTransport({
    service: 'gmail',  // or another email service provider, since we using gmail. we use gmail.
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

export default mailTransport;
