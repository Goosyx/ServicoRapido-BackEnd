import * as nodemailer from 'nodemailer';
import config from '../config/config';

export class NotificationProvider {
  async sendEmailNotification({ to, subject, text }: any): Promise<any> {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: config.nodemailer.auth.user,
        pass: config.nodemailer.auth.pass
      }
    })

    transporter.sendMail({
      from: config.nodemailer.auth.user,
      to,
      subject,
      text
    }).then(() => {
      console.log('Email sent')
    }).catch((error) => {
      console.error(error)
    })
  }
}