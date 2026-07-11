'use client';

import Link from 'next/link';
import { useReadmeWidgets, useReadmeMarkdown } from '@/lib/readme-context';
import WidgetSidebar from '@/components/widgets/Widgets';
import ReadmeEditor from '@/components/widgets/ReadmeEditor';
import { Button } from '@/components/ui/button';
import ConfirmDialog from '@/components/ConfirmDialog';
import { useReadmeActions } from '@/hooks/use-readme-actions';
import ImportGithubDialog from '@/components/ImportGithubDialog';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Create README",
  "url": "https://www.readmebit.com/create-readme",
  "description": "Start creating your GitHub README using widget-based editing, markdown formatting, and instant preview.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://www.readmebit.com"
  },
  "about": {
    "@type": "SoftwareApplication",
    "name": "ReadmeBit",
    "applicationCategory": "DeveloperTool",
    "operatingSystem": "Any",
    "url": "https://www.readmebit.com"
  }
}

export default function CreateReadme() {

  const { widgets } = useReadmeWidgets();
  const { markdown } = useReadmeMarkdown();
  const { handleDownload, handleCopyCode } = useReadmeActions(markdown);

  return (
    <div className="section-container">
      <div className="section-layout">
        {/* Page title */}
        <div className='text-container'>
          <h2 className='text-heading'>
            Create README
          </h2>
        </div>

        {/* Action buttons */}
        <div className="h-auto w-full flex justify-center md:justify-start
          items-center gap-4 flex-wrap"
        >
          <div className='h-auto w-auto'>
            <Link href="/preview-readme">
              <button
                className="px-4 py-2 text-sm font-workSans font-medium shadow-sm
                rounded bg-blue-700 text-white hover:bg-blue-700/60
                disabled:bg-blue-700/50 disabled:cursor-not-allowed"
                disabled={!markdown}
              >
                Full Preview
              </button>
            </Link>
          </div>

          <div className='h-auto w-auto'>
            <button
              onClick={handleDownload}
              disabled={!markdown}
              className="px-4 py-2 text-sm font-workSans font-medium shadow-sm
              rounded bg-green-700 text-white hover:bg-green-700/60
              disabled:bg-green-700/50 disabled:cursor-not-allowed"
            >
              Download
            </button>
          </div>

          <div className='h-auto w-auto'>
            <button
              onClick={handleCopyCode}
              disabled={!markdown}
              className="px-4 py-2 text-sm font-workSans font-medium shadow-xs
              rounded bg-secondary hover:bg-gray-200 dark:hover:bg-gray-50/60 text-black dark:text-white dark:hover:text-black
              disabled:bg-secondary/80 dark:disabled:bg-secondary/60 disabled:text-black/80 dark:disabled:text-gray-200 disabled:cursor-not-allowed"
            >
              Copy Code
            </button>
          </div>

          <div className='h-auto w-auto'>
            <ImportGithubDialog />
          </div>

          {/* dialog component */}
          {
            (widgets.length > 0 || markdown) && <ConfirmDialog />
          }
        </div>

        {/* Two Column Layout */}
        <div className="h-auto w-full flex flex-col lg:flex-row justify-center
          lg:justify-between items-center gap-8 lg:gap-0"
        >

          {/* widgets */}
          <div className="h-auto w-full! lg:w-[30%]!">
            <WidgetSidebar />
          </div>

          {/* editor */}
          <div className="h-auto w-full! lg:w-[66%]!">
            <ReadmeEditor />
          </div>
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