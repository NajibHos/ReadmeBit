'use client';

import { useReadmeMarkdown } from '@/lib/readme-context';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import StatsPanel from '@/components/widgets/StatsPanel';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Preview README",
  "url": "https://readmebit.com/preview-readme",
  "description": "Preview your GitHub README in a clean GitHub-style viewer before exporting.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://readmebit.com"
  },
  "about": {
    "@type": "SoftwareApplication",
    "name": "ReadmeBit"
  }
}

export default function PreviewReadme() {
  const { markdown } = useReadmeMarkdown();

  const handleDownload = () => {
    if (!markdown) {
      toast.error('No markdown to download');
      return;
    } else {
      toast.success('Downloading README.md');
    }

    // download markdown as README.md file
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = async () => {
    try {
      // copy to clipboard
      await navigator.clipboard.writeText(markdown);
      // toast notification
      toast.success('Markdown copied to clipboard');
    } catch (err) {
      // toast notification
      toast.error('Unable to copy markdown text');
      // show error in console
      console.error('Failed to copy markdown text: ', err);
    }
  };

  return (
    <div className="section-container">
      <div className='section-layout'>
        {/* page title */}
        <div className='text-container'>
          <h2 className='text-heading'>
            Preview README
          </h2>
        </div>

      {/* Action buttons */}
      <div className={`h-auto w-full ${!markdown ? 'hidden' : 'block'}
        flex justify-center lg:justify-start items-center gap-6`}
      >
        <div className='h-auto w-auto'>
          <Link href="/create-readme">
            <Button
              variant="secondary"
            >
              Back to Editor
            </Button>
          </Link>
        </div>
        <div className="h-auto w-auto">
          <Button
            onClick={handleCopyCode}
            variant="teal"
          >
            Copy code
          </Button>
        </div>
        <div className="h-auto w-auto">
          <Button
            onClick={handleDownload}
            variant="green"
          >
            Download
          </Button>
        </div>
      </div>

      {/* GitHub-style Preview */}
      <div className="h-auto w-full flex flex-col gap-5">
        {/* Markdown stats */}
        <StatsPanel content={markdown} />

        {/* Markdown content */}
        {markdown.trim() ? (
          <div className="h-auto w-full bg-transparent border rounded"
          >
            {/* GitHub-like header */}
            <div className="h-auto w-full px-6 py-3 bg-readme-preview-bg-light
              dark:bg-readme-preview-bg-dark border-b rounded-t"
            >
              <div className='h-auto w-auto'>
                <h2 className="text-subheading">
                  README.md
                </h2>
              </div>
            </div>

            {/* Markdown content */}
            <div className='h-auto w-full px-6 py-5 markdown-content
              bg-transparent'
            >
              <Markdown remarkPlugins={[remarkGfm]}>
                {`${markdown}`}
              </Markdown>
            </div>
          </div>
        ) : (
          <div className="h-auto w-full py-12 flex flex-col justify-center
            items-center gap-4"
          >
            <div className='h-auto w-full text-center'>
              <h3 className="text-subheading text-red-600!">
                No content to preview
              </h3>
            </div>
            <div className='h-auto w-full text-center'>
              <p className="text-body">
                Start creating your README for a preview here.
              </p>
            </div>
            <div className='h-auto w-auto mt-5'>
              <Link href="/create-readme">
                <Button
                  variant="teal"
                >
                  Go to Editor
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  );
}