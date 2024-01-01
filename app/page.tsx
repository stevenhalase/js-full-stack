import { fetchTodos } from "./lib/data";
import { TodoList } from "./ui/todo-list";


export default function Home() {
  const todos = fetchTodos();
  return (
    <div className="home">
      <TodoList />
    </div>
  );
}
