import { fetchTodos } from '@/app/lib/data';
import Nav from '@/app/ui/nav';
import TodoList from '@/app/ui/todo-list';

export default function Page() {
  const todos = fetchTodos();
  return (
    <main className="home flex h-screen w-screen flex-col">
      <Nav />
      <TodoList />
    </main>
  );
}
