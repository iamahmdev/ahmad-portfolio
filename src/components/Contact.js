"use client";
import { useState } from "react";
import { me } from "@/lib/data";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", type: "Business website", message: "" });
  const [st, setSt] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const text = `Hi Ahmad, I'm ${f.name || "(name)"}. Project: ${f.type}.\n${f.message}\nMy email: ${f.email}`;
  async function send() {
    setSt("Sending…");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const d = await r.json();
      setSt(d.ok ? "Sent! Ahmad will reply within a day." : d.error || "Could not send. Please use WhatsApp or email instead.");
    } catch { setSt("Could not send. Please use WhatsApp or email instead."); }
  }
  return (
    <div className="cg">
      <div className="form">
        <input placeholder="Your name" aria-label="Your name" value={f.name} onChange={set("name")} />
        <input type="email" placeholder="Your email" aria-label="Your email" value={f.email} onChange={set("email")} />
        <select aria-label="Project type" value={f.type} onChange={set("type")}>
          {["Business website", "Full-stack web app", "Dashboard or portal", "Tech writing / Articles", "Something else"].map(o => <option key={o}>{o}</option>)}
        </select>
        <textarea placeholder="What do you want to build?" aria-label="Project details" value={f.message} onChange={set("message")} />
        <div>
          <button type="button" className="btn c" onClick={send}>Send message</button>
          <a className="btn w" target="_blank" rel="noopener" href={me.whatsapp + "?text=" + encodeURIComponent(text)}>WhatsApp</a>
          <a className="btn" href={`mailto:${me.email}?subject=${encodeURIComponent("Project enquiry: " + f.type)}&body=${encodeURIComponent(text)}`}>Email</a>
        </div>
        <p aria-live="polite" style={{ color: "var(--mut)" }}>{st}</p>
      </div>
      <div className="dl">
        <a href={"mailto:" + me.email}>Email<small>{me.email}</small></a>
        <a href={me.whatsapp} target="_blank" rel="noopener">WhatsApp and phone<small>{me.phone}</small></a>
        <a href={me.linkedin} target="_blank" rel="noopener">LinkedIn<small>linkedin.com/in/iahmadiqbal</small></a>
        <a href={me.github} target="_blank" rel="noopener">GitHub<small>github.com/iamahmdev</small></a>
      </div>
    </div>
  );
}
