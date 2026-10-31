"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const quick = ["What services do you offer?", "What's your tech stack?", "How can I hire you?"];
export default function Agent() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState([{ role: "assistant", content: "Hi! I'm Ahmad's AI assistant. Ask me about his services, skills, projects or how to hire him." }]);
  const end = useRef();
  const [tip, setTip] = useState(false);
  useEffect(() => { const a = setTimeout(() => setTip(true), 6000), b = setTimeout(() => setTip(false), 13000); return () => { clearTimeout(a); clearTimeout(b); }; }, []);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);
  async function send(q) {
    if (!q.trim() || busy) return;
    const next = [...msgs, { role: "user", content: q }];
    setMsgs(next); setText(""); setBusy(true);
    try {
      const r = await fetch("/api/agent", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(1).slice(-8) }) });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d.reply }]);
    } catch { setMsgs([...next, { role: "assistant", content: "Connection problem. Email ahmaddev42@gmail.com and Ahmad will reply." }]); }
    setBusy(false);
  }
  return (<>
    <button className="ab" aria-label="Open AI assistant" onClick={() => setOpen(!open)}>{open ? "×" : "✦"}</button>
    {tip && !open && <div className="tip o">Questions about price or timeline? Ask my AI assistant.</div>}
    <AnimatePresence>{open && (
      <motion.div className="chat o" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.9 }}>
        <h4>Ahmad’s AI assistant</h4>
        <div className="msgs">
          {msgs.map((m, i) => <div key={i} className={"m " + (m.role === "user" ? "me" : "bot")}>{m.content}</div>)}
          {busy && <div className="m bot">Thinking…</div>}<div ref={end} />
        </div>
        {msgs.length < 3 && <div className="qs">{quick.map(q => <button key={q} onClick={() => send(q)}>{q}</button>)}</div>}
        <form onSubmit={e => { e.preventDefault(); send(text); }}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Ask about Ahmad…" aria-label="Message" />
          <button className="btn c">Send</button>
        </form>
      </motion.div>)}
    </AnimatePresence>
  </>);
}
