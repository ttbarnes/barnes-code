import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        // user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
        // pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
        user: 'hello@barnescode.co.uk',
        pass: 'XWcuJ3MyjVk5Bx26qC'
      },
      logger: true
    });

    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log('------ catch err ', err);

    res.status(500).json({ success: false });
  }
}

export default handler;
