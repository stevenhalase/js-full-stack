import { fetchTodos } from "../lib/data"
import { TodoList } from "../ui/todo-list"

export default function Page() {
  const todos = fetchTodos();
  console.log('TODOS:::', todos)
  return (
    <main>
      <TodoList></TodoList>
    </main>
  )
}