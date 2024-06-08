import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, email, message } = req.body;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'webdesignerben07@gmail.com',
                pass: 'Bc02042007!',
            },
        });
        let mailOptions = {
            from: 'webdesignerben07@gmail.com',
            to: 'webdesignerben07@gmail.com',
            subject: `New Submission on your Portfolio Page`,
            text: `New submission from ${username}. Email back ${email}. \n\nMessage: \n${message}`,
        }
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Failed to submit form.'});
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed.'});
    }
}