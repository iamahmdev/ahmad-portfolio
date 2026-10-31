import { NextRequest } from "next/server";
import { me } from "@/config/profile";
import {
  servicesList,
  skillsList,
  jobsList,
  projectsList,
} from "@/pages/home/data/home.data";

const kb = `You are the AI assistant on ${me.name}'s portfolio website. Answer visitors briefly (max 4 sentences), friendly and honest, using ONLY these facts. Never invent facts. For hiring, point to email ${me.email}, WhatsApp ${me.phone}, LinkedIn ${me.linkedin}.
About: ${me.about}
Services: ${servicesList.map((s) => s[0] + ": " + s[1]).join(" | ")}
Skills: ${JSON.stringify(skillsList)}
Experience: ${jobsList.map((j) => j.join(", ")).join(" | ")}
Projects: ${projectsList.map((p) => p.title + ": " + p.description).join(" | ")}
Location: Available worldwide for remote contracts and full-time roles. Languages: English (professional), Urdu. Education: BSSE, Abasyn University.`;

function fallback(q: string): string {
  q = q.toLowerCase();
  const has = (...w: string[]) => w.some((x) => q.includes(x));
  if (has("hire", "contact", "email", "reach", "price", "cost", "available"))
    return `You can reach Ahmad at ${me.email}, on WhatsApp (${me.phone}), or on LinkedIn. He takes part-time and project-based work.`;
  if (has("service", "offer", "do you do", "help"))
    return "Ahmad builds full-stack web apps, high-performance Next.js websites, management dashboards, Figma-to-code interfaces, robust REST APIs, and modern AI automations.";
  if (has("skill", "stack", "tech", "tool"))
    return "Frontend: React, Next.js, TypeScript, Tailwind, Redux Toolkit, TanStack Query, Framer Motion. Backend: Node.js, Express, MongoDB. Tools: Git, Postman, Vercel, Figma, Claude, Cursor.";
  if (has("project", "work", "portfolio", "built"))
    return projectsList.map((p) => `${p.title}: ${p.description}`).join("\n");
  if (has("experience", "job", "company", "year"))
    return "2+ years of full-stack MERN experience, engineering web apps and scalable systems at Faucon IMC, WebixSolutions, The WebStep, Hikenseek and Tech Mentors.";
  return `${me.about} Ask about services, skills, projects or hiring.`;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  const { messages = [] }: { messages?: Message[] } = await req.json();
  const last = messages[messages.length - 1]?.content || "";
  const key = process.env.ANTHROPIC_API_KEY;

  if (!key) return Response.json({ reply: fallback(last) });

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 400,
        system: kb,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });
    const d = await r.json();
    return Response.json({ reply: d.content?.[0]?.text || fallback(last) });
  } catch {
    return Response.json({ reply: fallback(last) });
  }
}
