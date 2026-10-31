export const mailConfig = {
  recipientEmail: process.env.CONTACT_RECEIVER_EMAIL || "ahmaddev42@gmail.com",
  senderEmail: process.env.CONTACT_SENDER_EMAIL || "Portfolio Inquiries <notifications@resend.dev>",
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    secure: process.env.SMTP_SECURE === "true" || parseInt(process.env.SMTP_PORT || "465", 10) === 465,
    user: process.env.SMTP_USER || process.env.GMAIL_USER || "",
    pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "",
  },
  resendApiKey: process.env.RESEND_API_KEY || "",
  callMeBotApiKey: process.env.CALLMEBOT_APIKEY || "",
  phone: "923359348844",
};
