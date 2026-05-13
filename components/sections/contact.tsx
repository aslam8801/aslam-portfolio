import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white">
          Contact
        </h2>

        <p className="mt-6 text-zinc-400">
          Let’s build scalable backend systems and
          AI-powered products together.
        </p>

        <p className="mt-8 text-lg text-blue-500">
          {portfolioData.email}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={portfolioData.github}
            target="_blank"
            className="rounded-2xl border border-white/10 px-8 py-4 text-white transition duration-300 hover:border-blue-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aslam-kureshi-794090222/"
            target="_blank"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-white transition duration-300 hover:scale-105"
          >
            LinkedIn
          </a>

          <a
            href={portfolioData.resume}
            target="_blank"
            className="rounded-2xl border border-blue-500 px-8 py-4 text-blue-500 transition duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}