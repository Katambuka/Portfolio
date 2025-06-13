import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, services } = await request.json();

    // 1. Configure email sender
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 2. Prepare email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'albaashe77@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${services?.join(', ') || 'None'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 3. Return success
    return NextResponse.json({ 
      success: true,
      message: "Message sent successfully!" 
    });

  } catch (error) {
    // 4. Handle errors
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}