import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-shell px-0 py-24 sm:py-28">
      <div className="section-container">
        <p className="section-eyebrow">My academic journey</p>
        <h2 className="section-title">Education & <span className="gradient-text">learning</span></h2>
        <div className="mt-10 max-w-4xl">
          <article className="glass-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C49A6C]/10 text-[#E0BD91]"><GraduationCap size={28} /></div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3"><span className="gold-chip">2023–2024 session</span><span className="gold-chip">6th Semester</span></div>
                <h3 className="mt-4 text-2xl font-bold">Diploma in Engineering</h3>
                <p className="mt-2 text-[#C4B1A1]">Computer Science & Technology</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-[#C4B1A1]"><MapPin size={16} className="text-[#C49A6C]" /> Sylhet Polytechnic Institute</p>
              </div>
            </div>
            <div className="mt-7 border-t border-[#C49A6C]/15 pt-5"><p className="text-sm leading-7 text-[#C4B1A1]">Focused on programming fundamentals, software development and building practical web development skills alongside academic study.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
