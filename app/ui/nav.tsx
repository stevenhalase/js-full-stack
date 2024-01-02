import Link from 'next/link';
import TodoLogo from './todo-logo';

export default function Nav() {
  return (
    <main className="flex w-screen flex-row place-content-between bg-slate-700 p-7 text-white">
      <Link href="/dashboard">
        <TodoLogo />
      </Link>
      <Link
        href="/new"
        className="ml-4 flex h-10 items-center rounded-lg bg-slate-600 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:bg-slate-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      >
        Add New
      </Link>
    </main>
  );
}
