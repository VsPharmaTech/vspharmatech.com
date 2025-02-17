export const prerender = false;
import { Resend } from "resend";
import "dotenv/config";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }: any) {
  try {
    const { email, fullName, country, mobileNumber, message } =
      await request.json();

    // ✅ Send Thank You Email to User
    await resend.emails.send({
      from: "VS Pharmatech <no-reply@vspharmatech.com>",
      to: email,
      subject: `Thank You, ${fullName}!`,
      text: `Hello ${fullName},\n\nThank you for your enquiry. We will get back to you soon!`,
      html: `<p>Hello ${fullName},</p><p>Thank you for reaching out! We will contact you soon.</p><p>Best Regards,<br> VS Pharmatech Team</p>`,
    });

    // ✅ Send Enquiry Details to Team
    await resend.emails.send({
      from: "VS Pharmatech <no-reply@vspharmatech.com>",
      to: "info.vspharmatech@gmail.com",
      subject: `New Enquiry from ${fullName}`,
      html: `<p><strong>New Enquiry Received:</strong></p>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Country:</b> ${country}</p>
      <p><b>Mobile:</b> ${mobileNumber}</p>
      <p><b>Message:</b> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
