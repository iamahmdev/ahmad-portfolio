"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Tilt from "@/components/Tilt";
import Agent from "@/components/Agent";
import Contact from "@/components/Contact";
import { me, nav, services, steps, faq, skills, jobs, projects } from "@/lib/data";
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const roles = ["MERN Stack Developer", "Next.js Engineer", "React.js Specialist", "Tech Writer & Blogger"];

function Typer() {
  const [i, setI] = useState(0), [n, setN] = useState(0);
  useEffect(() => {
    const w = roles[i];
    const t = setTimeout(() => (n < w.length ? setN(n + 1) : setTimeout(() => { setN(0); setI((i + 1) % roles.length); }, 1400)), 70);
    return () => clearTimeout(t);
  }, [n, i]);
  return <div className="type">{roles[i].slice(0, n)}|</div>;
}
const Head = ({ t, p }) => <><h2>{t}</h2><p className="lead">{p}</p></>;
const Cards = ({ list, num }) => list.map((c, i) => (
  <Tilt key={c[0]} delay={(i % 3) * 0.1}>{num && <div className="n">{i + 1}</div>}<h3>{c[0]}</h3><p>{c[1]}</p></Tilt>
));

export default function Home() {
  const [on, setOn] = useState(""), [open, setOpen] = useState(false);
  const hv = useRef();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setOn(e.target.id)), { threshold: 0.35 });
    nav.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el); });
    const rv = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("v"), rv.unobserve(e.target))), { threshold: 0.15 });
    document.querySelectorAll(".rv").forEach(el => rv.observe(el));
    return () => { io.disconnect(); rv.disconnect(); };
  }, []);
  const move = (e) => {
    const r = hv.current.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    hv.current.style.transform = `rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
  };
  return (<>
    <Scene />
    <header className="hd"><div className="in">
      <a className="logo" href="#top" aria-label="Ahmad, home"><img src="/logo.jpg" alt="Ahmad Iqbal" />Ahmad</a>
      <nav className="links" aria-label="Main">{nav.map(n => <a key={n} href={"#" + n.toLowerCase()} className={on === n.toLowerCase() ? "on" : ""}>{n}</a>)}</nav>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <a className="btn c" href="#contact">Hire me</a>
        <button className="bg" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
      </div></div>
      <nav className={"menu" + (open ? " o" : "")} aria-label="Mobile">{nav.map(n => <a key={n} href={"#" + n.toLowerCase()} onClick={() => setOpen(false)}>{n}</a>)}</nav>
    </header>
    <main id="top">
      <section className="hero"><div className="wrap hg"><div>
        <div className="pill"><i></i>Available for new projects</div>
        <h1>I build websites and apps<br /><span className="grad">that win customers.</span></h1>
        <p className="s">Hi, I’m Ahmad Iqbal, a MERN stack developer in Lahore. Fast Next.js websites, full-stack apps and dashboards, delivered on schedule.</p>
        <Typer />
        <div className="cta"><a className="btn c" href="#contact">Get a free quote</a><a className="btn w" href={me.whatsapp + "?text=Hi%20Ahmad%2C%20I%20have%20a%20project%20idea."} target="_blank" rel="noopener">Chat on WhatsApp</a></div>
        <div className="proof">{[["5+", "apps delivered on schedule"], ["40%", "faster page loads"], ["1,000+", "users on my dashboards"], ["0", "post-launch revision cycles"]].map(p => <div key={p[1]}><b className="grad">{p[0]}</b><span>{p[1]}</span></div>)}</div>
      </div>
      <div className="hv" ref={hv} onMouseMove={move} onMouseLeave={() => (hv.current.style.transform = "")}>
        <div className="disc"></div><img className="cut" src="/ahmad-cutout.webp" alt="Ahmad Iqbal, MERN stack developer" />
        <div className="gc" style={{ left: "-4%", top: "20%" }}><b className="grad">30%</b>faster project setup<br />with AI tools</div>
        <div className="gc" style={{ right: "-5%", top: "42%", animationDelay: "-2s" }}><b className="grad">20+</b>Figma screens<br />turned into code</div>
        <div className="plate"><b>Ahmad Iqbal</b><span>MERN Stack Developer · Lahore</span><em><i></i>Replies within a day</em></div>
      </div></div></section>

      <section id="worries"><div className="wrap">
        <Head t="Questions every client asks" p="Before hiring a developer, most people worry about the same things. Here are my straight answers." />
        <div className="grid"><Cards list={faq} /></div>
        <div style={{ marginTop: 36 }}><a className="btn c" href="#contact">Get a free quote</a><a className="btn w" href={me.whatsapp} target="_blank" rel="noopener">Ask me on WhatsApp</a></div>
      </div></section>

      <section id="about"><div className="wrap">
        <Head t="About me" p={me.about} />
        <div className="grid"><Cards list={[
          ["Requirements first", "I talk to clients directly, plan with design and backend teams, then build, test and deliver each feature."],
          ["Clean, maintainable code", "Reusable component libraries, structured Git workflows and code reviews for a 5-person team."],
          ["Remote ready", "Working with a Dubai-based team and international clients. Urdu native, professional English."]]} /></div>
      </div></section>

      <section id="services"><div className="wrap">
        <Head t="Services" p="What I can build for you, from a single landing page to a full-stack platform." />
        <div className="grid"><Cards list={services} /></div>
        <h2 style={{ marginTop: 80 }}>How I work</h2><p className="lead">The same four steps on every project, so you always know what happens next.</p>
        <div className="grid"><Cards list={steps} num /></div>
      </div></section>

      <section id="skills"><div className="wrap">
        <Head t="Skills" p="The tools I use every day." />
        {Object.entries(skills).map(([k, v]) => <div key={k}><div className="skh">{k}</div><div className="chips">{v.map(s => <span key={s} className="chip">{s}</span>)}</div></div>)}
      </div></section>

      <section id="experience"><div className="wrap">
        <Head t="Experience" p="Three years of shipping real products for real clients." />
        <div className="tl">{jobs.map((j, i) => <div key={j[0] + i} className="job rv"><small>{j[2]}</small><h3>{j[0]}</h3><small>{j[1]}</small><p>{j[3]}</p></div>)}</div>
      </div></section>

      <section id="projects"><div className="wrap">
        <Head t="Projects" p="Selected work. Move your cursor over a card." />
        <div className="grid">{projects.map((p, i) => <Tilt key={p[0]} delay={(i % 2) * 0.1}><h3>{p[0]}</h3><p>{p[1]}</p><div>{p[2].map(t => <span key={t} className="tag">{t}</span>)}</div></Tilt>)}</div>
      </div></section>

      <section id="contact"><div className="wrap">
        <Head t="Tell me about your project" p="Share your idea and I’ll reply with a free quote, usually within a day." />
        <Contact />
      </div></section>
    </main>
    <footer>© 2026 Ahmad Iqbal, Lahore, Pakistan</footer>
    <a className="wa" href={me.whatsapp} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.6 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.2.1.8-.1 1.4z" /></svg></a>
    <Agent />
  </>);
}
