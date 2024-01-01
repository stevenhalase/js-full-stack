import { Todo } from "./todo";

export function TodoList() {
  return (
  <div className="">
    <div className="">
      Todo List
    </div>
    <Todo complete={false} description={'A task'}></Todo>
    <Todo complete={true} description={'Another task'}></Todo>
  </div>
  );
}
