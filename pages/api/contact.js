import nodemailer from 'nodemailer';

const { GMAIL_USERNAME, GMAIL_PASSWORD, CONTACT_FORM_RECIPIENTS } = process.env;

const handler = async (req, res) => {
  try {
    console.info('✅ Sending email');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USERNAME,
        pass: GMAIL_PASSWORD
      },
      logger: true
    });

    const { email, subject, message } = req.body;

    const info = await transporter.sendMail({
      from: email,
      to: CONTACT_FORM_RECIPIENTS,
      subject: `Barnes Code - ${subject}`,
      html: message.replaceAll('\n', '<br/>')
    });

    console.info('✅ Email successfully sent: ', info.messageId);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error Sending email');

    res.status(500).json({ success: false });
  }
}

export default handler;
