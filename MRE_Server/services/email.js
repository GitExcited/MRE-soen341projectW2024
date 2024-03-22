import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

const {EMAILPASS} = process.env;

async function sendEmail(email_to, body, subject){

    let config = {
        service: 'gmail',
        auth: {
            user: "montrealrentalenterprise@gmail.com",
            pass: EMAILPASS
        }
    };

    let transporter = nodemailer.createTransport(config);

    if (!email_to) {
        return res.status(400).send({ msg: "Email address is missing from the request." });
    }

    let message = {
        from: 'montrealrentalenterprise@gmail.com',
        to: email_to,
        subject: subject,
        html: body,
    };

    let response = [];

    try {
        let info = await transporter.sendMail(message);
        response = ["Success",{
                    msg: "Email sent",
                    info: info.messageId,
                    preview: nodemailer.getTestMessageUrl(info)
                }];
    } catch (error) {
        response = ["Failure",{ msg: "Failed to send email", error: err.message }];
    }
    //     response = [201,{
    //         msg: "Email sent",
    //         info: info.messageId,
    //         preview: nodemailer.getTestMessageUrl(info)
    //     }];
    // err => {
    //     response = [500,{ msg: "Failed to send email", error: err.message }];
    //     //res.status(500).json({ msg: "Failed to send email", error: err.message });
    // });
    return response;
};

export default sendEmail;