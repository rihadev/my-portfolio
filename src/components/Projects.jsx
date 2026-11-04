import { ArrowUpRight, Code2 } from "lucide-react";
const projects = [
  {
    title: "ChronoClock",
    type: "Time Dashboard",
    description:
      "An interactive time dashboard project. Update this description to match the exact features in your current version.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rihadev/ChronoClock-.git",
    live: "https://rihadev.github.io/ChronoClock-/",
  },
  {
    title: "Personal Budget Tracker",
    type: "Finance App",
    description:
      "A JavaScript project for tracking a personal budget. Update the feature list to reflect what your actual app supports.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rihadev/personal-budget-tracker.git",
    live: "https://rihadev.github.io/personal-budget-tracker/",
  },
  {
    title: "User Management App",
    type: "React Application",
    description:
      "A React app that fetches user data from an API and supports searching and viewing detailed user information.",
    tech: ["React", "JavaScript", "REST API"],
    github: "https://github.com/rihadev/react-user-management-.git",
    live: "https://react-user-management-sage.vercel.app/",
  },
  {
    title: "Shop.co | Fashion Landing Page",
    type: "HTML, CSS",
    description:
      "Created a fashion-focused responsive landing page using HTML and CSS.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/rihadev/shop.co-landing-page.git",
    live: "https://rihadev.github.io/shop.co-landing-page/",
  },
  {
    title: "Fresh Mart",
    type: "Frontend Web Project",
    description:
      "Developed a responsive online shooping interface focused on product presentation and user-friendly navigation.",
    tech: ["HTML", "CSS", "Java Script"],
    github: "https://github.com/rihadev/Fresh-Mart.git",
    live: "https://rihadev.github.io/Fresh-Mart/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell px-0 py-24 sm:py-28">
      <div className="section-container">
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-title">
          Projects built with <span className="gradient-text">purpose</span>
        </h2>
        <p className="section-copy mt-5 max-w-2xl">
          A selection of projects that reflect my learning journey and practical
          frontend development skills.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="gold-chip">{project.type}</span>
                <span className="text-sm font-semibold text-[#8B5E3C]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#C4B1A1]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#C49A6C]/15 bg-[#1C120F] px-2.5 py-1.5 text-xs text-[#E0BD91]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-button flex-1 !px-3 !py-2.5 text-sm"
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="flex-1 rounded-full border border-[#C49A6C]/15 px-3 py-2.5 text-center text-sm text-[#A99585]">
                    Demo coming soon
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button !px-3 !py-2.5 text-sm"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Code2 size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
