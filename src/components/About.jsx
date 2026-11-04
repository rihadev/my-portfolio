import { BrainCircuit, Code2, Languages } from "lucide-react";

const highlights = [
  { icon: BrainCircuit, title: "AI Training", text: "Completed an AI-related training program and received a certificate." },
  { icon: Code2, title: "Programming", text: "Building practical skills in JavaScript, React and Python fundamentals." },
  { icon: Languages, title: "Communication", text: "Developing English communication and technical documentation skills." },
];

export default function About() {
  return (
    <section id="about" className="section-shell px-0 py-24 sm:py-28">
      <div className="section-container">
        <p className="section-eyebrow">A little about me</p>
        <h2 className="section-title">Curious mind. <span className="gradient-text">Builder mindset.</span></h2>
        <p className="section-copy mt-5 max-w-2xl">I&apos;m a Computer Science & Technology student who enjoys turning ideas into useful, accessible and responsive web experiences. I&apos;m currently strengthening my frontend skills and working toward becoming a full-stack developer.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[.15em] text-[#C49A6C]">Who I am</p>
            <h3 className="mt-4 text-2xl font-bold">Learning by building real projects</h3>
            <p className="section-copy mt-4">I enjoy experimenting with layouts, improving user experience and solving problems with code. My current focus is JavaScript, React, Tailwind CSS, Git and GitHub.</p>
            <p className="section-copy mt-4">My long-term goal is to grow into a confident full-stack web developer and contribute to meaningful digital products.</p>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[.15em] text-[#C49A6C]">Education</p>
            <h3 className="mt-4 text-2xl font-bold">Diploma in Engineering</h3>
            <p className="mt-2 text-[#C4B1A1]">Computer Science & Technology</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#C49A6C]/15 bg-[#1C120F] p-4"><p className="text-xs text-[#A99585]">Current status</p><p className="mt-2 font-semibold">6th Semester</p></div>
              <div className="rounded-2xl border border-[#C49A6C]/15 bg-[#1C120F] p-4"><p className="text-xs text-[#A99585]">Institute</p><p className="mt-2 font-semibold">Sylhet Polytechnic Institute</p></div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C49A6C]/10 text-[#E0BD91]"><Icon size={21} /></div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#C4B1A1]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
