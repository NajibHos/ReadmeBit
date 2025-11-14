import { useMemo } from "react";

function sanitizeMarkdown(md: string) {
  let s = typeof md === 'string' ? md : '';

  // Replace images/links with their alt/text so we count visible words, not urls
  s = s.replace(/!\[([^\]]*)\]\([^\)]*\)/g, '$1'); // images -> alt text
  s = s.replace(/\[([^\]]+)\]\([^\)]*\)/g, '$1'); // links -> link text

  // Remove code fences entirely and keep inline code content
  s = s.replace(/```[\s\S]*?```/g, ' '); // code blocks removed
  s = s.replace(/`([^`]+)`/g, '$1'); // inline code backticks removed

    // Remove heading markers, blockquotes, list markers at line starts
  s = s.replace(/(^|\n)#{1,6}\s+/g, '$1'); // headings
  s = s.replace(/(^|\n)>\s+/g, '$1'); // blockquote
  s = s.replace(/(^|\n)\s*([-*+]|\d+\.)\s+/g, '$1'); // lists

  // Remove remaining markdown formatting characters that can create extra tokens
  s = s.replace(/[*_~#>`]/g, ' ');

  // Collapse whitespace
  s = s.replace(/\s+/g, ' ').trim();

  return s;
}

export default function StatsPanel({ content }: { content: string }) {
  const { words, chars, readingTime } = useMemo(() => {
    const plain = sanitizeMarkdown(content);
    const charsCount = plain.length;
    const wordsCount = plain === '' ?
      0 : plain.split(/\s+/).filter(Boolean).length;
    const readingTimeMinutes = wordsCount === 0 ? 0 : Math.ceil(wordsCount / 200);
    return { words: wordsCount,
      chars: charsCount,
      readingTime: readingTimeMinutes
    };
  }, [content]);

  return (
    <div className="flex gap-4 text-sm lg:text-base font-inter font-medium
      text-gray-700 dark:text-gray-300"
    >
      <span>{words} words</span>
      <span>{chars} characters</span>
      <span>~ {readingTime} min read</span>
    </div>
  );
}