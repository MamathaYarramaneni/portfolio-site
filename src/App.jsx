import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowDown,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { profile, skillGroups, experience, projects, education } from "./data";

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
  <section id={id} className="mx-auto max-w-5xl px-6 py-20">
    <Reveal>
      <h2 className="mb-10 text-3xl font-bold text-white">
        {title}
        <span className="ml-3 inline-block h-1 w-12 rounded bg-linear-to-r from-violet-500 to-cyan-400 align-middle" />
      </h2>
    </Reveal>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="rounded bg-violet-500/15 px-2 py-1 text-xs text-violet-200">
    {children}
  </span>
);

const btnPrimary =
  "rounded-full bg-linear-to-r from-violet-500 to-cyan-500 px-6 py-3 font-medium text-white transition hover:scale-105";
const btnGhost =
  "rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            aria-label="Back to top"
            className="rounded-xl bg-linear-to-br from-violet-500 to-cyan-400 p-[1.5px] transition hover:scale-105"
          >
            <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-slate-900">
              <span className="bg-linear-to-br from-violet-400 to-cyan-300 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
                MY
              </span>
            </span>
          </a>
          <div className="flex gap-5 text-sm text-slate-300">
            {["about", "experience", "projects", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize hover:text-white">
                {s}
              </a>
            ))}
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
              className="mt-6 text-xl text-slate-200"
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
              <a href="#projects" className={btnPrimary}>
                View my work
              </a>
              <a href="#contact" className={btnGhost}>
                Get in touch
              </a>
            </motion.div>
          </div>
          <ArrowDown className="absolute bottom-8 animate-bounce text-slate-500" />
        </section>

        {/* About + Skills */}
        <Section id="about" title="About">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              {profile.about}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex sm:items-start sm:gap-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300 sm:mb-0 sm:w-40 sm:shrink-0 sm:pt-1">
                    {g.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-8 border-l border-white/10 pl-6">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 grid h-5 w-5 place-items-center rounded-full bg-slate-950 ring-2 ring-violet-400">
                    <Briefcase size={10} className="text-violet-300" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {job.title} ·{" "}
                      <span className="text-cyan-300">{job.company}</span>
                    </h3>
                    <span className="text-sm text-slate-400">{job.period}</span>
                  </div>
                  <p className="text-sm text-slate-500">{job.place}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-violet-400/50"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  {p.period && (
                    <p className="mt-1 text-xs text-slate-500">{p.period}</p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  {(p.live || p.repo) && (
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
                  )}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <GraduationCap className="mb-3 text-cyan-300" />
                  <h3 className="font-semibold text-white">{e.school}</h3>
                  <p className="mt-1 text-sm text-slate-300">{e.degree}</p>
                  <p className="mt-2 text-sm text-slate-400">{e.detail}</p>
                  <p className="mt-1 text-xs text-slate-500">{e.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <Reveal>
            <p className="max-w-xl text-slate-300">
              Open to new opportunities and collaborations. Reach out on
              LinkedIn or check out my code on GitHub.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={btnPrimary}
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={btnGhost}
              >
                GitHub
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
