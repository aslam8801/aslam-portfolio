const projects = [
  {
    title: "AI Rental Pricing System",

    description:
      "AI-powered property pricing platform using ML, geospatial intelligence, and real estate analytics.",

    link: "https://ai-rental-pricing-platform.vercel.app/",
  },

  {
    title: "AI Resume Analyzer",

    description:
      "Resume analysis platform using NLP and GenAI to score resumes and provide optimization suggestions.",

    link: "https://ai-resume-analyzer-3p8u.onrender.com/",
  },

  {
    title: "Journal App",

    description:
      "Full-stack journaling application with authentication, markdown editor, and cloud storage support.",

    link: "https://journalf.onrender.com/",
  },

  {
    title: "Tasks Inbox Platform",

    description:
      "Task and productivity management platform for organizing workflows, priorities, and daily operations.",

    link: "https://tasks-inbox-platform.vercel.app/",
  },

  {
    title: "DeFi Lending Protocol",

    description:
      "Decentralized lending protocol built on SOON Decoupled SVM architecture.",

    link: "https://github.com/aslam8801",
  },

  {
    title: "Portfolio Website",

    description:
      "Modern animated developer portfolio built using Next.js, Tailwind CSS, and Framer Motion.",

    link: "https://github.com/aslam8801",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white">
          Projects
        </h2>

        <p className="mt-4 text-zinc-400">
          Featured backend, AI, and full-stack projects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="mt-6 inline-block text-blue-500 transition hover:text-blue-400"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}