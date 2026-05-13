"use client";

import { motion } from "framer-motion";

import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_40%)]" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-500"
        >
          OPEN TO WORK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black leading-tight text-white md:text-7xl"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-2xl font-semibold text-blue-500 md:text-4xl"
        >
          {portfolioData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          {portfolioData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href={portfolioData.github}
            target="_blank"
            className="rounded-2xl border border-white/10 px-8 py-4 font-medium text-white transition hover:scale-105"
          >
            GitHub
          </a>

          <a
            href={portfolioData.resume}
            target="_blank"
            className="rounded-2xl border border-blue-500 px-8 py-4 font-medium text-blue-500 transition hover:scale-105"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "Java",
            "Spring Boot",
            "Node.js",
            "Next.js",
            "Docker",
            "Kubernetes",
            "GenAI",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 backdrop-blur-sm"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}