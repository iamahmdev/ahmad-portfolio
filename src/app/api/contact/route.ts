import { NextRequest } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  type?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  const {
    name = "",
    email = "",
    type = "",
    message = "",
  }: ContactRequestBody = await req.json();

  if (!name.trim() || !message.trim()) {
    return Response.json(
      { ok: false, error: "Name and message are required." },
      { status: 400 }
    );
  }

  const text = `New enquiry from ${name} (${email})\nProject: ${type}\n${message}`;
  const jobs: Promise<Response>[] = [];

  if (process.env.RESEND_API_KEY) {
    jobs.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: ["ahmaddev42@gmail.com"],
          reply_to: email || undefined,
          subject: `Project enquiry: ${type}`,
          text,
        }),
      })
    );
  }

  if (process.env.CALLMEBOT_APIKEY) {
    jobs.push(
      fetch(
        `https://api.callmebot.com/whatsapp.php?phone=923359348844&apikey=${
          process.env.CALLMEBOT_APIKEY
        }&text=${encodeURIComponent(text)}`
      )
    );
  }

  if (!jobs.length) {
    return Response.json(
      { ok: false, error: "No delivery keys configured." },
      { status: 503 }
    );
  }

  const res = await Promise.allSettled(jobs);
  return Response.json({
    ok: res.some((r) => r.status === "fulfilled" && r.value.ok),
  });
}
