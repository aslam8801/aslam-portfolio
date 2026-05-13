const skills = [
  "C++",
  "Java",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Python",
  "GenAI",
  "LLM",
  "System Design",
  "Low Level Design",
  "REST APIs",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white">
          Skills
        </h2>

        <p className="mt-4 text-zinc-400">
          Technologies and tools I use to build scalable
          applications and AI-powered systems.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 text-zinc-300 transition duration-300 hover:border-blue-500 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}