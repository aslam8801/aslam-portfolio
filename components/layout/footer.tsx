export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-zinc-500">
          © 2026 Aslam Kureshi
        </p>

        <p className="text-sm text-zinc-500">
          Built with Next.js + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}