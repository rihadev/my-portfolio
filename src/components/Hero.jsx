import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center px-0 pb-16 pt-32 sm:pt-36"
    >
      {/* Chocolate and gold background glow */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#C49A6C]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#8B5E3C]/15 blur-[100px]" />

      <div className="section-container relative z-10 mx-auto grid w-full min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] md:gap-6 lg:gap-12">
        {/* LEFT SIDE: INTRODUCTION */}
        <div className="hero-intro min-w-0">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#C49A6C]/25 bg-[#2A1B16]/70 px-4 py-2 text-sm text-[#E0BD91]">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#C49A6C]" />
            Aspiring Web Developer
          </div>

          <p className="hero-greeting mb-3 text-sm font-semibold uppercase tracking-[.18em] text-[#D6C1AE]">
            Hi, I&apos;m
          </p>

          {/* Animated name */}
          <h1 className="hero-name text-5xl font-black leading-[1.15] tracking-[-.045em] sm:text-6xl lg:text-7xl">
            <span className="hero-name-first">Riha</span>{" "}
            <span className="hero-name-highlight gradient-text">Begum</span>
            <span className="mt-3 block text-3xl font-bold leading-tight tracking-[-.035em] text-[#F5E6D3] sm:text-4xl lg:text-5xl">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#D6C1AE] sm:text-lg">
            I create clean, responsive and user-friendly web experiences using
            JavaScript, React and modern frontend technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="gold-button">
              View My Work <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="outline-button">
              Contact Me
            </a>

            <a
              href="/Riha-Begum-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              View Resume <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#D6C1AE]">
            <span className="inline-flex items-center gap-2">
              <Code2 size={17} className="text-[#E0BD91]" />
              React &amp; JavaScript
            </span>

            <span className="inline-flex items-center gap-2">
              <Sparkles size={17} className="text-[#E0BD91]" />
              Always learning
            </span>
          </div>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-sm text-[#E0BD91] transition-all duration-300 hover:gap-3"
          >
            Scroll to explore <ArrowDown size={16} />
          </a>
        </div>

        {/* RIGHT SIDE: PROFILE CARD */}
        <div className="relative mx-auto w-full min-w-0 max-w-md">
          <div className="pointer-events-none absolute inset-5 rounded-[2rem] bg-[#C49A6C]/10 blur-3xl" />

          <div className="glass-card relative min-w-0 overflow-hidden p-5 sm:p-7">
            {/* Profile header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E0BD91] to-[#8B5E3C] text-2xl font-black text-[#1C120F] shadow-lg shadow-black/20">
                  R
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#F5E6D3]">
                    Riha Begum
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#D6C1AE]">
                    CSE Student · Web Developer
                  </p>
                </div>
              </div>

              <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-[#C49A6C]/25 bg-[#1C120F] px-3 py-2">
                <Sparkles size={15} className="shrink-0 text-[#E0BD91]" />
                <p className="whitespace-nowrap text-xs font-semibold text-[#E0BD91]">
                  Build. Learn. Grow.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#C49A6C]">
                Current Toolkit
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="gold-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-6 h-px bg-[#C49A6C]/20" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="min-w-0 rounded-xl border border-[#C49A6C]/15 bg-[#1C120F]/80 p-3 sm:p-4">
                <Code2 size={18} className="text-[#E0BD91]" />
                <p className="mt-3 text-lg font-bold text-[#F5E6D3]">5+</p>
                <p className="mt-1 text-xs leading-5 text-[#C4B1A1]">Skills</p>
              </div>

              <div className="min-w-0 rounded-xl border border-[#C49A6C]/15 bg-[#1C120F]/80 p-3 sm:p-4">
                <Sparkles size={18} className="text-[#E0BD91]" />
                <p className="mt-3 text-lg font-bold text-[#F5E6D3]">3</p>
                <p className="mt-1 text-xs leading-5 text-[#C4B1A1]">
                  Projects
                </p>
              </div>

              <div className="min-w-0 rounded-xl border border-[#C49A6C]/15 bg-[#1C120F]/80 p-3 sm:p-4">
                <GraduationCap size={18} className="text-[#E0BD91]" />
                <p className="mt-3 text-lg font-bold text-[#F5E6D3]">06</p>
                <p className="mt-1 text-xs leading-5 text-[#C4B1A1]">
                  Semester
                </p>
              </div>
            </div>

            {/* Closing note */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#C49A6C]/15 bg-[#C49A6C]/5 p-4">
              <Sparkles size={18} className="mt-1 shrink-0 text-[#E0BD91]" />
              <p className="text-sm leading-6 text-[#D6C1AE]">
                Learning by building practical projects and improving my
                development skills every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
