'use client';

import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteTodo, updateTodo } from '@/app/lib/actions';
import { Todo } from '@/app/lib/definitions';

export default function Todo({ todo }: { todo: Todo }) {
  const deleteTodoWithId = deleteTodo.bind(null, todo.id);

  const handleTodoCompleteChange = () => {
    updateTodo(todo.id, !todo.complete);
  };

  return (
    <div className="m-2 flex flex-row items-center justify-between rounded border-2 border-slate-500 p-4">
      <div
        className="flex flex-row items-center"
        onClick={handleTodoCompleteChange}
      >
        <input
          id="complete"
          aria-describedby="todo-description"
          name="complete"
          type="checkbox"
          className="mr-2 h-4 w-4 rounded-sm border-slate-500"
          checked={todo.complete}
          readOnly
        />
        <label id="todo-description" className="">
          {todo.description}
        </label>
      </div>
      <div className="self-end">
        <form action={deleteTodoWithId}>
          <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
