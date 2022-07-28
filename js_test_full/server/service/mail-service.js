const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    //the code is commented out because it is not maintained by us at the moment
    async sendActivationMail(to, link) {
        // code email verification
        // await this.transporter.sendMail({
        //     from: process.env.SMTP_USER,
        //     to,
        //     subject: 'account activation for' + process.env.API_URL,
        //     text: '',
        //     html: <div>
        //         <h1>Title</h1>
        //         <a href={`${link}`}>${link}</a>
        //     </div>
        // })
    }
}

module.exports = new MailService()
