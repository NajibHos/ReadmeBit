'use client';

import { useReadmeMarkdown } from '@/lib/readme-context';
import { Textarea } from '../ui/textarea';
import MarkdownToolbar from './MarkdownToolbar';

export default function ReadmeEditor() {
  const { markdown, updateMarkdown } = useReadmeMarkdown();

  const handleTextareaChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateMarkdown(ev.target.value);
  };

  return (
    <div className="h-auto w-full flex flex-col justify-center items-center border rounded"
    >
      <div className='h-auto w-full px-5 py-3 text-left border-b'>
        <h2 className='text-subheading'>
          Editor
        </h2>
      </div>

      {/* Markdown tollbar component */}
      <MarkdownToolbar />

      {/* Markdown Editor */}
      <div className='h-[480px] w-full'>
        <Textarea
          value={markdown}
          onChange={handleTextareaChange}
          className='h-full w-full p-5 text-base font-inter font-medium
          bg-[#faf7f5] dark:bg-gray-900 text-gray-900 dark:text-white
          border-transparent! rounded-none! ocus:outline-0! focus:ring-1!
          focus:ring-gray-700 focus:dark:ring-gray-400! overflow-auto'
          placeholder='Start adding widgets from the sidebar to build your README...'
        />
      </div>
    </div>
  );
}
