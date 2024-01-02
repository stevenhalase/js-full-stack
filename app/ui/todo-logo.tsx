import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function TodoLogo() {
  return (
    <div className="flex flex-row w-min">
      <ClipboardDocumentCheckIcon className="h-8 w-8" />
      <p className="text-lg whitespace-nowrap">Todo List</p>
    </div>
  );
}