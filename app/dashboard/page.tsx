import { fetchTodos } from "../lib/data";
import Nav from "../ui/nav";
import TodoList from "../ui/todo-list";

export default function Page() {
  const todos = fetchTodos();
  return (
    <main className="home w-screen h-screen flex flex-col">
      <Nav />
      <TodoList />
    </main>
  );
}
