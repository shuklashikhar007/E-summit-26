// import nodemailer from 'nodemailer';
//
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const {  name, email, phone, message, role  } = req.body;
//
//
//     const mailOptions = {
//       from: `${email}`,
//       to: 'ecell@iitbhu.ac.in',
//       subject: `E-suumit'24 Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.example.com',
//         port: 587,
//         secure: false, // Set to true if using SSL/TLS
//         auth: {
//           user: '',
//           pass: '',
//         },
//       });
//
//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false });
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
// }
