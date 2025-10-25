export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 py-6 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} AI Verse. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with ❤️ and shadcn/ui</p>
      </div>
    </footer>
  );
}
