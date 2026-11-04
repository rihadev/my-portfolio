import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#C49A6C]/15 bg-[#160D0A]">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
        <a href="#home" className="text-xl font-black text-[#F5E6D3]">Riha<span className="text-[#C49A6C]">.</span></a>
        <p className="text-xs text-[#A99585]">© {new Date().getFullYear()} Riha Begum. Built with React & Tailwind CSS.</p>
        <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-[#C49A6C]/20 px-4 py-2 text-sm text-[#E0BD91] transition hover:bg-[#2A1B16]">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}
