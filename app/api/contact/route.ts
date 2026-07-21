import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, requirement, message, quantity, productName, productCategory } = body;

    // Check environment variables
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const toEmail = process.env.RECEIVER_EMAIL || user;

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Email configuration (EMAIL_USER or EMAIL_PASS) is missing on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    let emailSubject = "";
    let emailHtml = "";

    if (productName) {
      // Product consultation request
      emailSubject = `Zentree Product Inquiry: ${productName} - from ${name}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #F8F5F0;">
          <h2 style="color: #8C6239; border-bottom: 2px solid #8C6239; padding-bottom: 12px; margin-top: 0; font-family: Georgia, serif; font-weight: normal;">Zentree Product Sourcing Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px; width: 140px;">Customer Name:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Customer Email:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;"><a href="mailto:${email}" style="color: #8C6239; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Product Name:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${productName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Product Category:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${productCategory}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Estimated Quantity:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${quantity || "Not specified"}</td>
            </tr>
          </table>
          
          <h3 style="color: #8C6239; margin-top: 25px; margin-bottom: 10px; font-family: Georgia, serif; font-weight: normal; font-size: 16px;">Message / Specifications</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #8C6239; border-radius: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05); white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #444;">${message || "No message provided."}</div>
          
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 25px 0;" />
          <p style="font-size: 11px; color: #999; text-align: center; margin: 0;">This email was automatically generated from the Zentree Plywood website contact portal.</p>
        </div>
      `;
    } else {
      // General Contact page form
      emailSubject = `Zentree Sourcing Request: ${requirement} - from ${name}`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #F8F5F0;">
          <h2 style="color: #8C6239; border-bottom: 2px solid #8C6239; padding-bottom: 12px; margin-top: 0; font-family: Georgia, serif; font-weight: normal;">General Sourcing Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px; width: 140px;">Customer Name:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Customer Phone:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Customer Email:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;"><a href="mailto:${email}" style="color: #8C6239; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666; font-size: 13px;">Required Categories:</td>
              <td style="padding: 6px 0; font-weight: bold; color: #333;">${requirement}</td>
            </tr>
          </table>
          
          <h3 style="color: #8C6239; margin-top: 25px; margin-bottom: 10px; font-family: Georgia, serif; font-weight: normal; font-size: 16px;">Project Details / Sourcing Volume</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #8C6239; border-radius: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05); white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #444;">${message || "No message provided."}</div>
          
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 25px 0;" />
          <p style="font-size: 11px; color: #999; text-align: center; margin: 0;">This email was automatically generated from the Zentree Plywood contact portal.</p>
        </div>
      `;
    }

    const mailOptions = {
      from: user,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: error?.message || "An error occurred while sending the email." },
      { status: 500 }
    );
  }
}
