import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webdesignerben07@gmail.com', // use environment variable
        pass: 'Bc02042007!', // use environment variable
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
      res.status(319).json({ success: false, error: 'bullshit' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}