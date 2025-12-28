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
  "url": "https://readmebit.com/create-readme",
  "description": "Start creating your GitHub README using widget-based editing, markdown formatting, and instant preview.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://readmebit.com"
  },
  "about": {
    "@type": "SoftwareApplication",
    "name": "ReadmeBit",
    "applicationCategory": "DeveloperTool",
    "operatingSystem": "Any",
    "url": "https://readmebit.com"
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
          items-center gap-6 flex-wrap"
        >
          <div className='h-auto w-auto'>
            <Link href="/preview-readme">
              <Button
                disabled={!markdown}
                variant="teal"
              >
                Full Preview
              </Button>
            </Link>
          </div>

          <div className='h-auto w-auto'>
            <Button
              onClick={handleDownload}
              disabled={!markdown}
              variant="green"
            >
              Download
            </Button>
          </div>

          <div className='h-auto w-auto'>
            <Button
              onClick={handleCopyCode}
              disabled={!markdown}
              variant="outline"
            >
              Copy code
            </Button>
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