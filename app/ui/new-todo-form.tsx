'use client';

import { PencilIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { createTodo } from '@/app/lib/actions';
import Link from 'next/link';

export default function NewTodoForm() {
  const initialState = { errors: {}, message: '' };
  const [state, dispatch] = useFormState(createTodo, initialState);

  return (
    <div className="m-2 flex flex-col rounded border-2 border-slate-500 p-4">
      <form action={dispatch}>
        <fieldset>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="description"
          >
            Description
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="description"
              type="text"
              name="description"
              placeholder="What task do you need to accomplish?"
              required
            />
            <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </fieldset>
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description &&
            state.errors.description.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex h-10 items-center rounded-lg bg-slate-700 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 active:bg-slate-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          >
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
}
