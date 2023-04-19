import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
const process = dotenv.config();

/************************* forgot password email ********** */
const forgotPassword = async(mailTo, body)=> {
    return new Promise((resolve,reject)=>{

        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            service: process.parsed.SERVICE,
            host: process.parsed.MAIL_HOST,
            port: process.parsed.MAIL_PORT ,
            secure: false,
            auth: {
                user: process.parsed.EMAIL,
                pass: process.parsed.EMAIL_PASSWORD
            }
        });

        // Message object
        let message = {
            from: `Event Management<${process.parsed.EMAIL}>`,
            to: mailTo,
            subject: 'OTP Detail',
            html: `OPT : ${body}`
        };

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return reject({
                    sent: false,
                    message: err.message
                });
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return resolve({
                sent: true,
                message: `mail send successfully ${info.messageId}`
            });
        });
    });
};

export {
    forgotPassword,
};
