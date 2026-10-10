import { motion } from "motion/react";
import { Mail, ExternalLink, ArrowDown, Code } from "lucide-react";
import { profile, skills, projects } from "./data";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-5xl px-6 py-24">
    <Reveal>
      <h2 className="mb-10 text-3xl font-bold text-white">
        {title}
        <span className="ml-3 inline-block h-1 w-12 rounded bg-linear-to-r from-violet-500 to-cyan-400 align-middle" />
      </h2>
    </Reveal>
    {children}
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold text-white">
            {profile.name.split(" ")[0]}
          </a>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
          <motion.div
            className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-cyan-300"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-xl text-slate-300"
            >
              {profile.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mx-auto mt-4 max-w-xl text-slate-400"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex justify-center gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-linear-to-r from-violet-500 to-cyan-500 px-6 py-3 font-medium text-white transition hover:scale-105"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact me
              </a>
            </motion.div>
          </div>
          <ArrowDown className="absolute bottom-8 animate-bounce text-slate-500" />
        </section>

        {/* About */}
        <Section id="about" title="About">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              {profile.about}
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-violet-400/50"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-slate-400">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-violet-500/15 px-2 py-1 text-xs text-violet-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-4 text-sm">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-cyan-300 hover:underline"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-cyan-300 hover:underline"
                      >
                        <Code size={14} /> Code
                      </a>
                    )}
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <Reveal>
            <p className="max-w-xl text-slate-300">
              Open to new opportunities and collaborations. The best way to
              reach me is by email.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-500 px-6 py-3 font-medium text-white transition hover:scale-105"
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
