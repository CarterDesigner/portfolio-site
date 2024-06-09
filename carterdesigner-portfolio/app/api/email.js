import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // use environment variable
        pass: process.env.GMAIL_PASS, // use environment variable
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_USER, // use environment variable
      to: 'webdesignerben07@gmail.com',
      subject: `Contact Form Submission from ${username}`,
      text: `You have a new contact form submission from ${username} (${email}).\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}