import Link from 'next/link';
import TodoLogo from './ui/todo-logo';

export default function Home() {
  return (
    <main className="home flex h-screen w-screen flex-col place-content-center bg-slate-700 text-white">
      <div className="flex flex-col items-center">
        <TodoLogo />
        <Link
          href="/dashboard"
          className="m-4 flex h-10 items-center rounded-lg bg-slate-600 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:bg-slate-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
