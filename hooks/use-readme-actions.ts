import { toast } from 'sonner';

export const useReadmeActions = (markdown: string) => {
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

  return {
    handleDownload,
    handleCopyCode,
  };
};
