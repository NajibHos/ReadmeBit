'use client';

import { useReadmeMarkdown } from '@/lib/readme-context';
import { Textarea } from '../ui/textarea';
import MarkdownToolbar from './MarkdownToolbar';
import DraftIndicator from './DraftIndicator';
import { useRef, useState } from 'react';

export default function ReadmeEditor() {
  const { markdown, updateMarkdown, setCursorPosition } = useReadmeMarkdown();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorHint, setCursorHint] = useState(false);

  const handleTextareaChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) =>
  {
    updateMarkdown(ev.target.value);
    setCursorPosition(ev.target.selectionStart);
    setCursorHint(true);
  };

  const handleClick = () => {
    if (textareaRef.current) {
      setCursorPosition(textareaRef.current.selectionStart);
      setCursorHint(true);
    }
  };

  const handleKeyUp = () => {
    if (textareaRef.current) {
      setCursorPosition(textareaRef.current.selectionStart);
      setCursorHint(true);
    }
  };

  const handleBlur = () => {
    setCursorHint(false);
  };

  return (
    <div className="h-auto w-full flex flex-col justify-center items-center
      border rounded"
    >
      <div className='h-auto w-full px-5 py-3 flex flex-col justify-center
        items-center gap-2.5 bg-transparent border-b'
      >
        <div className='h-auto w-full text-left'>
          <h2 className="text-subheading">
            Editor
          </h2>
        </div>
        <div className='h-auto w-full text-left'>
          <DraftIndicator cursor={cursorHint} />
        </div>
      </div>

      {/* Markdown tollbar component */}
      <MarkdownToolbar />

      {/* Markdown Editor */}
      <div className='h-[480px] w-full'>
        <Textarea
          ref={textareaRef}
          value={markdown}
          onChange={handleTextareaChange}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
          className='h-full w-full p-5 text-base! font-workSans font-medium
          bg-[#ffffff] dark:bg-gray-900 text-gray-900 dark:text-white
          border-transparent! rounded-none! focus:outline-0!
          focus:ring-2! overflow-auto'
          placeholder='Start writing your README.md content here...'
        />
      </div>
    </div>
  );
}