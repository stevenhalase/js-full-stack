import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function TodoLogo() {
  return (
    <div className="flex w-min flex-row">
      <ClipboardDocumentCheckIcon className="h-8 w-8" />
      <p className="whitespace-nowrap text-lg">Todo List</p>
    </div>
  );
}
