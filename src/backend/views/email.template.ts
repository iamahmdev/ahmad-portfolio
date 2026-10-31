import { ContactMessage } from "../models/contact.model";

/**
 * View Layer: Renders responsive HTML and Plain Text templates
 * for contact form inquiries sent to Ahmad's inbox.
 */

export function renderContactEmailText(data: ContactMessage): string {
  return `New Project Enquiry from ${data.name}

Sender Details:
- Name: ${data.name}
- Email: ${data.email}
- Project Type: ${data.type}
- Received: ${data.createdAt.toUTCString()}

Message:
${data.message}

---
Ahmad Iqbal Portfolio Inquiry`;
}

export function renderContactEmailHtml(data: ContactMessage): string {
  const formattedDate = data.createdAt.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #070d1c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #eaf0ff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #070d1c; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background: rgba(20, 30, 62, 0.95); border: 1px solid rgba(140, 170, 255, 0.25); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 35px 35px 25px; background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15)); border-bottom: 1px solid rgba(140, 170, 255, 0.2);">
              <span style="display: inline-block; padding: 5px 12px; background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.4); border-radius: 999px; font-size: 12px; font-weight: 600; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                New Portfolio Lead
              </span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">
                Project Inquiry: ${data.type}
              </h1>
              <p style="margin: 6px 0 0; font-size: 14px; color: #a3afd2;">
                Received on ${formattedDate}
              </p>
            </td>
          </tr>

          <!-- Client Details Section -->
          <tr>
            <td style="padding: 30px 35px 10px;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom: 15px;">
                    <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #818cf8; font-weight: 700; display: block; margin-bottom: 4px;">
                      Client Name
                    </span>
                    <span style="font-size: 17px; font-weight: 600; color: #ffffff;">
                      ${data.name}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 15px;">
                    <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #818cf8; font-weight: 700; display: block; margin-bottom: 4px;">
                      Client Email
                    </span>
                    <a href="mailto:${data.email}" style="font-size: 16px; color: #38bdf8; text-decoration: none; font-weight: 500;">
                      ${data.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #818cf8; font-weight: 700; display: block; margin-bottom: 4px;">
                      Requested Service
                    </span>
                    <span style="display: inline-block; padding: 4px 10px; background: rgba(129, 140, 248, 0.18); border-radius: 8px; font-size: 13px; font-weight: 600; color: #c7d2fe;">
                      ${data.type}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 0 35px 30px;">
              <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #818cf8; font-weight: 700; display: block; margin-bottom: 8px;">
                Project Description / Requirements
              </span>
              <div style="background: rgba(7, 13, 28, 0.7); border: 1px solid rgba(140, 170, 255, 0.18); border-radius: 14px; padding: 20px; font-size: 15px; line-height: 1.6; color: #eaf0ff; white-space: pre-wrap;">${data.message}</div>
            </td>
          </tr>

          <!-- Action Buttons -->
          <tr>
            <td style="padding: 10px 35px 35px; border-top: 1px solid rgba(140, 170, 255, 0.15);">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Re:%20${encodeURIComponent("Project Inquiry: " + data.type)}&body=Hi%20${encodeURIComponent(data.name)},%0A%0AThank%20you%20for%20reaching%20out!%20" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #38bdf8, #818cf8); color: #04101c; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 14px; margin-right: 10px;">
                      Reply to Client
                    </a>
                    <a href="https://wa.me/923359348844" style="display: inline-block; padding: 12px 20px; background: rgba(255,255,255,0.06); border: 1px solid rgba(140,170,255,0.25); color: #eaf0ff; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 14px;">
                      Open Portfolio
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 18px 35px; background: rgba(5, 9, 20, 0.7); text-align: center; font-size: 12px; color: #7380a5;">
              Automated message sent from <strong style="color: #a3afd2;">ahmad-portfolio-woad.vercel.app</strong>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
