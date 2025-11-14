import { useReadmeMarkdown } from '@/lib/readme-context';
import { Bold, Italic, Link, Code, List, Image } from 'lucide-react';

export default function MarkdownToolbar() {
  const { markdown, updateMarkdown } = useReadmeMarkdown();

  const insertFormat = (prefix: string, suffix: string = prefix) => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = markdown;

    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    updateMarkdown(`${before}${prefix}${selected}${suffix}${after}`);
  };

  return (
    <div className="h-auto w-full flex gap-5 px-5 py-3 border-b
      border-border-color bg-[#faf7f5] dark:bg-gray-900"
    >
      <button
        onClick={() => insertFormat('**')}
        className='text-gray-900 dark:text-white hover:*:text-blue-700
        transition-colors'
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => insertFormat('*')}
        className='text-gray-900 dark:text-white hover:*:text-blue-700
        transition-colors'
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => insertFormat('`')}
        className='text-gray-900 dark:text-white hover:*:text-blue-700
        transition-colors'
      >
        <Code size={18} />
      </button>
      <button
        onClick={() => insertFormat('[', '](url)')}
        className='text-gray-900 dark:text-white hover:*:text-blue-700
        transition-colors'
      >
        <Link size={18} />
      </button>
    </div>
  );
}