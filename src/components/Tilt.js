"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Tilt({ children, delay = 0 }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    ry.set((x - 0.5) * 22); rx.set((0.5 - y) * 22);
    e.currentTarget.style.setProperty("--mx", x * 100 + "%");
    e.currentTarget.style.setProperty("--my", y * 100 + "%");
  };
  return (
    <motion.div className="card" style={{ rotateX: rx, rotateY: ry }} onMouseMove={move} onMouseLeave={() => { rx.set(0); ry.set(0); }}
      initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
}
