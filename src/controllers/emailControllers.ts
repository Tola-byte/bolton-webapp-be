import { Request, Response } from 'express';
import { sendEmail } from '../services/emailServices';
import { handleSuccess } from '../utils/utils';

export const sendEmailHandler = async (req: Request, res: Response) => {
    const { to, subject, date,time } = req.body;
   
    // const textLoad = Object.keys(restOfBody)
    // const formattedTextLoad = Object.entries(restOfBody).map(([key, value]) => `${key}: ${value}`).join('\n')

    // let textLoad: string

    // textLoad = text ? `{${formattedTextLoad}\n\nText:\n${text}}` : `{${formattedTextLoad}}`

    try {
       // console.log(restOfBody, 'request body')
        await sendEmail(to, subject, date, time);
        // res.status(200).json({ message: "Email sent successfully" });
        handleSuccess({ res, message: 'Email sent successfully' })
    } catch (error: any) {
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
};
