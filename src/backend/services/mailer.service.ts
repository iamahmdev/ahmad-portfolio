import nodemailer from "nodemailer";
import { ContactMessage } from "../models/contact.model";
import { renderContactEmailHtml, renderContactEmailText } from "../views/email.template";
import { mailConfig } from "../config/mail.config";

export interface MailerResult {
  success: boolean;
  provider: "smtp" | "resend" | "whatsapp" | "simulated";
  messageId?: string;
  error?: string;
}

/**
 * Service Layer: Dispatches email notifications using Nodemailer (SMTP),
 * Resend API, or WhatsApp webhook based on available environment credentials.
 */
export class MailerService {
  /**
   * Primary dispatcher: Tries Nodemailer (SMTP), then Resend, then WhatsApp webhook.
   */
  public async sendContactNotification(message: ContactMessage): Promise<MailerResult> {
    const htmlContent = renderContactEmailHtml(message);
    const textContent = renderContactEmailText(message);
    const subject = `New Portfolio Inquiry: ${message.type} from ${message.name}`;

    // 1. Try Nodemailer SMTP if credentials exist (e.g., GMAIL_USER / GMAIL_APP_PASSWORD)
    if (mailConfig.smtp.user && mailConfig.smtp.pass) {
      try {
        const smtpResult = await this.sendViaSmtp(message, subject, htmlContent, textContent);
        if (smtpResult.success) return smtpResult;
      } catch (err: any) {
        console.warn("[MailerService] SMTP attempt failed, falling back to next provider:", err.message);
      }
    }

    // 2. Try Resend API if RESEND_API_KEY is configured
    if (mailConfig.resendApiKey) {
      try {
        const resendResult = await this.sendViaResend(message, subject, htmlContent, textContent);
        if (resendResult.success) return resendResult;
      } catch (err: any) {
        console.warn("[MailerService] Resend attempt failed, falling back to next provider:", err.message);
      }
    }

    // 3. Try WhatsApp notification via CallMeBot if key is present
    if (mailConfig.callMeBotApiKey) {
      try {
        const waResult = await this.sendViaWhatsApp(message);
        if (waResult.success) return waResult;
      } catch (err: any) {
        console.warn("[MailerService] WhatsApp webhook attempt failed:", err.message);
      }
    }

    // 4. If no mail provider credentials are set up yet in environment variables:
    // Log the message in the server logs so the lead is never lost, and return simulated success
    console.info("==================================================");
    console.info("✉️ [PORTFOLIO LEAD RECEIVED - NO SMTP KEYS SET]");
    console.info(`From: ${message.name} <${message.email}>`);
    console.info(`Project Type: ${message.type}`);
    console.info(`Message: ${message.message}`);
    console.info("To receive real emails in ahmaddev42@gmail.com, set GMAIL_USER and GMAIL_APP_PASSWORD or RESEND_API_KEY in Vercel.");
    console.info("==================================================");

    return {
      success: true,
      provider: "simulated",
      messageId: `sim_${Date.now()}`,
    };
  }

  /**
   * Sends via Nodemailer SMTP (Gmail or custom mail server)
   */
  private async sendViaSmtp(
    message: ContactMessage,
    subject: string,
    html: string,
    text: string
  ): Promise<MailerResult> {
    const transporter = nodemailer.createTransport({
      host: mailConfig.smtp.host,
      port: mailConfig.smtp.port,
      secure: mailConfig.smtp.secure,
      auth: {
        user: mailConfig.smtp.user,
        pass: mailConfig.smtp.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Ahmad Portfolio" <${mailConfig.smtp.user}>`,
      to: mailConfig.recipientEmail,
      replyTo: message.email,
      subject,
      text,
      html,
    });

    return {
      success: true,
      provider: "smtp",
      messageId: info.messageId,
    };
  }

  /**
   * Sends via Resend HTTP API
   */
  private async sendViaResend(
    message: ContactMessage,
    subject: string,
    html: string,
    text: string
  ): Promise<MailerResult> {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailConfig.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailConfig.senderEmail,
        to: [mailConfig.recipientEmail],
        reply_to: message.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return {
      success: true,
      provider: "resend",
      messageId: data.id,
    };
  }

  /**
   * Sends instant ping to WhatsApp via CallMeBot webhook
   */
  private async sendViaWhatsApp(message: ContactMessage): Promise<MailerResult> {
    const text = `New Portfolio Inquiry from ${message.name} (${message.email})\nType: ${message.type}\nMessage: ${message.message}`;
    const url = `https://api.callmebot.com/whatsapp.php?phone=${mailConfig.phone}&apikey=${mailConfig.callMeBotApiKey}&text=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`CallMeBot WhatsApp error: ${response.status}`);
    }

    return {
      success: true,
      provider: "whatsapp",
    };
  }
}

export const mailerService = new MailerService();
