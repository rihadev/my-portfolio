const groups = [
  { title: "Frontend Development", skills: [
    { name: "HTML", level: "Comfortable", width: "88%" },
    { name: "CSS", level: "Comfortable", width: "82%" },
    { name: "JavaScript", level: "Building", width: "68%" },
    { name: "React", level: "Building", width: "62%" },
    { name: "Tailwind CSS", level: "Building", width: "68%" },
  ]},
  { title: "Tools & Programming", skills: [
    { name: "Git", level: "Practicing", width: "60%" },
    { name: "GitHub", level: "Practicing", width: "66%" },
    { name: "Python", level: "Basic", width: "42%" },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell px-0 py-24 sm:py-28">
      <div className="section-container">
        <p className="section-eyebrow">Tools of my trade</p>
        <h2 className="section-title">Skills & <span className="gradient-text">technologies</span></h2>
        <p className="section-copy mt-5 max-w-2xl">I keep improving through hands-on practice, project work and learning modern web development tools.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-7 space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3"><span className="font-medium">{skill.name}</span><span className="text-xs text-[#C4B1A1]">{skill.level}</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#1C120F]"><div className="h-full rounded-full bg-gradient-to-r from-[#8B5E3C] via-[#C49A6C] to-[#E0BD91]" style={{ width: skill.width }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-3 rounded-3xl border border-[#C49A6C]/20 bg-[#2A1B16] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-sm text-[#C49A6C]">Currently learning</p><h3 className="mt-1 text-xl font-bold">Full-Stack Web Development</h3></div>
          <span className="gold-chip w-fit">Learning by building</span>
        </div>
      </div>
    </section>
  );
}
