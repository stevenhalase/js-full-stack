import Nav from '@/app/ui/nav';
import NewTodoForm from '@/app/ui/new-todo-form';

export default function Page() {
  return (
    <main className="home flex h-screen w-screen flex-col">
      <Nav />
      <NewTodoForm />
    </main>
  );
}
