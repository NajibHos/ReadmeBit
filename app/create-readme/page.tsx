'use client';

import Link from 'next/link';
import { useReadmeWidgets, useReadmeMarkdown } from '@/lib/readme-context';
import WidgetSidebar from '@/components/widgets/Widgets';
import ReadmeEditor from '@/components/widgets/ReadmeEditor';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

export default function CreateReadme() {
  const { widgets, clearAll } = useReadmeWidgets();
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
      toast.error('Unable to copy markdown');
      // show error in console
      console.error('Failed to copy text: ', err);
    }
  };

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
                Preview
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
              variant="secondary"
            >
              Copy code
            </Button>
          </div>
          {
            (widgets.length > 0 || markdown) && (
              <>
                <div className='h-auto w-auto'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary_red"
                      >
                        Clear All
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Are you sure you want to clear all widgets?
                        </DialogTitle>
                        <DialogDescription>
                          All data will be lost. This action can not be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <div className='h-auto w-auto'>
                        <Button
                          onClick={() => clearAll()}
                          variant="alert"
                        >
                          Yes, Clear all widgets
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </>
            )
          }
        </div>

        {/* Two Column Layout */}
        <div className="h-auto w-full flex flex-col lg:flex-row justify-center
          lg:justify-between items-center gap-8 lg:gap-0">
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
    </div>
  );
}