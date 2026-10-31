import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
const f = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f" });
export const metadata = {
  title: "Ahmad Iqbal | MERN Stack Developer",
  description: "Full-stack MERN developer building fast, animated, production-ready web apps with React, Next.js, Node.js and MongoDB.",
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={f.variable}>{children}</body></html>);
}
