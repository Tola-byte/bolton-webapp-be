
import mailTransport from "../config/mailConfig";
import { config } from "dotenv";
import { generateGoogleCalendarLink } from "../functions/emailFunctions";
config();

export const sendEmail = async (to: string, subject: string, time: string, date: string) => {
    
    
    const calendarLink = generateGoogleCalendarLink(subject, time);
    const mailOptions = {
       // from: from || process.env.MAIL_USER,
        to: to || process.env.RECEIVER_MAIL,
        subject: subject || 'LAUGHIE Reminder 😅',
        html: `<div>
        <p><strong>Hello</strong>, you set a reminder at ${date}, ${time}. <br/>
        <br/>
        Please do endeavour to create a reminder on your calendar.
        Below is a calendar link.</p>
        <br/>
        <br/>
        <p>Add to your calendar:
        <a href="${calendarLink}">
        Google Calendar</a>
        </p>
        </div>`,
    };

    try {
        const result = await mailTransport.sendMail(mailOptions);
        console.log('Email sent is: ', result);
        return result;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
