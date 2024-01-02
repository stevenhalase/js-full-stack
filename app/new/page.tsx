import Nav from "../ui/nav";
import NewTodoForm from "../ui/new-todo-form";

export default function Page() {
  return (
    <main className="home w-screen h-screen flex flex-col">
      <Nav />
      <NewTodoForm />
    </main>
  )
}