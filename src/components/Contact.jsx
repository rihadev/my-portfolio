import {
  Code2,
  Mail,
  MessageCircle,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const contactItems = [
  {
    title: "Email",
    text: "rihabegum.dev@gmail.com",
    href: "mailto:rihabegum.dev@gmail.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    text: "Let's connect",
    href: "https://web.whatsapp.com/",
    icon: MessageCircle,
  },
  {
    title: "GitHub",
    text: "Explore my code",
    href: "https://github.com/rihadev/rihadev",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    text: "Professional profile",
    href: "https://www.linkedin.com/in/riha-begum/?lipi=urn%3Ali%3Apage%3Ap_mwlite_feed%3BemfxBoXgSp%2BTlST68rk%2BXg%3D%3D",
    icon: BriefcaseBusiness,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell px-0 py-24 sm:py-28">
      <div className="section-container">
        <p className="section-eyebrow">Have something in mind?</p>

        <h2 className="section-title">
          Let's make something{" "}
          <span className="gradient-text">meaningful.</span>
        </h2>

        <p className="section-copy mt-5 max-w-2xl">
          I'm open to learning opportunities, collaborations and conversations
          about web development.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ title, text, href, icon: Icon }) => (
            <article key={title} className="glass-card p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C49A6C]/10 text-[#E0BD91]">
                <Icon size={22} />
              </div>

              <h3 className="mt-4 font-bold">{title}</h3>

              <p className="mt-2 min-h-10 break-words text-sm text-[#C4B1A1]">
                {text}
              </p>

              {href ? (
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#E0BD91] hover:text-[#F5E6D3]"
                >
                  {title === "Email" ? "Send email" : "Open profile"}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="mt-4 inline-block text-xs text-[#A99585]">
                  Add your link
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-[#C49A6C]/20 bg-gradient-to-r from-[#2A1B16] to-[#241711] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-bold text-[#F5E6D3]">Open to opportunities</p>
            <p className="mt-1 text-sm leading-6 text-[#C4B1A1]">
              Internships, projects and opportunities to learn and grow.
            </p>
          </div>

          <a
            href="mailto:rihabegum.dev@gmail.com"
            className="gold-button w-fit"
          >
            Say Hello <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
