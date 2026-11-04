import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
  ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[#C49A6C]/20 bg-[#1C120F]/90 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" onClick={close} className="text-xl font-black tracking-tight text-[#F5E6D3] sm:text-2xl">
            Riha<span className="text-[#C49A6C]">.</span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-[#C4B1A1] transition hover:text-[#E0BD91]">{label}</a>
            ))}
          </div>
          <a href="#contact" className="gold-button hidden !px-4 !py-2 text-sm sm:inline-flex">
            Let&apos;s Talk <ArrowUpRight size={16} />
          </a>
          <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="rounded-xl border border-[#C49A6C]/25 p-2 text-[#F5E6D3] lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="mt-4 grid gap-1 border-t border-[#C49A6C]/15 pt-3 lg:hidden">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={close} className="rounded-xl px-3 py-2.5 text-sm text-[#C4B1A1] transition hover:bg-[#35231C] hover:text-[#E0BD91]">{label}</a>
            ))}
            <a href="#contact" onClick={close} className="gold-button mt-2">Let&apos;s Talk <ArrowUpRight size={16} /></a>
          </div>
        )}
      </div>
    </nav>
  );
}
