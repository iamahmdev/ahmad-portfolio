# Portfolio Backend Architecture (MVC Pattern)

This folder contains the complete, production-ready backend for Ahmad Iqbal's Portfolio, architected strictly following the **Model-View-Controller (MVC)** software design pattern.

---

## 🏗️ MVC Architecture Breakdown

```
backend/
├── models/                  # [MODEL LAYER] Data validation, schemas & contracts
│   └── contact.model.ts     # Contact message validation, type definitions & sanitization
├── views/                   # [VIEW LAYER] Presentation templates
│   └── email.template.ts    # Responsive HTML and plain-text email templates
├── controllers/             # [CONTROLLER LAYER] Business logic & HTTP orchestration
│   └── contact.controller.ts# Handles requests, coordinates model validation & service dispatch
├── services/                # [SERVICE LAYER] External integrations & transport
│   └── mailer.service.ts    # Transports email via Nodemailer SMTP, Resend, or WhatsApp
├── config/                  # Configuration & environment variables
│   └── mail.config.ts       # Centralized mail credentials and receiver settings
└── server.ts                # Standalone Node.js server (optional independent execution)
```

---

## 📬 How Email Receiving Works

When a client or recruiter fills out the contact form on your portfolio:

1. **Controller (`contact.controller.ts`)** receives the form submission.
2. **Model (`contact.model.ts`)** validates that name, email syntax, and project details are correct and sanitized.
3. **View (`email.template.ts`)** compiles a branded, dark glassmorphic HTML email template.
4. **Service (`mailer.service.ts`)** dispatches the email to your personal inbox: **`ahmaddev42@gmail.com`**.

---

## ⚙️ How to Receive Emails in Your Gmail Inbox

You can use **either** of these two simple, free methods:

### Method A: Gmail SMTP (Free, 2 minutes setup)
1. Go to your Google Account -> **Security** -> **2-Step Verification**.
2. Scroll to the bottom and click **App Passwords**.
3. Create a new app password named "Portfolio" (Google gives you a 16-character code).
4. Add these two environment variables in your Vercel Project Settings (or `.env.local`):
   ```env
   GMAIL_USER=ahmaddev42@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

### Method B: Resend API (Free 3,000 emails/month)
1. Sign up at [Resend.com](https://resend.com) for free.
2. Copy your API Key.
3. Add this environment variable in Vercel:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   ```

---

## 🚀 Execution Modes

- **Serverless (Default):** Runs seamlessly via Next.js API route `/api/contact` on Vercel with zero extra server hosting fees.
- **Standalone:** Run `npx ts-node backend/server.ts` to spin up an independent HTTP backend on port 5000.
