import Link from "next/link";
import { fetchTodos } from "../lib/data";
import Todo from "./todo";

export default async function TodoList() {
  const todos = await fetchTodos();
  return (
  <div className="flex flex-col basis-full bg-slate-50 text-slate-700 p-2">
    <div>
      {
        todos.sort((a, b) => {
          const aDate = new Date(a.date);
          const bDate = new Date(b.date);
          return bDate > aDate ? -1 : bDate < aDate ? 1 : 0;
        }).map(todo => (<Todo key={todo.id} todo={todo}></Todo>))
      }
    </div>
  </div>
  );
}
