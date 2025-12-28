'use client';

import { useState } from 'react';
import { useReadmeMarkdown } from '@/lib/readme-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { usePathname, useRouter } from 'next/navigation';

export default function ImportGithubDialog() {
  const { markdown } = useReadmeMarkdown();
  const { updateMarkdown } = useReadmeMarkdown();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const parseGithubUrl = (inputUrl: string) => {
    try {
      let cleanUrl = inputUrl.trim();

      // Remove trailing slash
      if (cleanUrl.endsWith('/')) {
        cleanUrl = cleanUrl.slice(0, -1);
      }

      // Handle "owner/repo" format (no github.com)
      if (!cleanUrl.includes('github.com') && !cleanUrl.includes('://')) {
        const parts = cleanUrl.split('/');
        if (parts.length === 2) {
          return { owner: parts[0], repo: parts[1] };
        }
      }

      // Ensure protocol exists for URL constructor
      if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = 'https://' + cleanUrl;
      }

      const urlObj = new URL(cleanUrl);

      // Check hostname (allow www.github.com)
      if (urlObj.hostname !== 'github.com' && urlObj.hostname !== 'www.github.com') {
        return null;
      }

      const parts = urlObj.pathname.split('/').filter(Boolean);
      if (parts.length < 2) return null;

      return {
        owner: parts[0],
        repo: parts[1]
      };
    } catch (e) {
      return null;
    }
  };

  const handleImport = async () => {
    if (!url) return;

    const repoInfo = parseGithubUrl(url);
    if (!repoInfo) {
      toast.error('Invalid GitHub repository URL');
      return;
    }

    setLoading(true);
    try {
      const { owner, repo } = repoInfo;
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Repository not found or is private. This tool only works with public repositories.');
        } else if (response.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        } else {
          throw new Error('Failed to fetch README');
        }
      }

      const data = await response.json();

      if (data.content) {
        // Decode Base64 content properly handling UTF-8
        const decodedContent = decodeURIComponent(escape(atob(data.content)));
        updateMarkdown(decodedContent);
        toast.success('README imported successfully!');
        setOpen(false);
        setUrl('');

        // Redirect to create-readme if not already there
        if (pathname !== '/create-readme') {
          router.push('/create-readme');
        }
      } else {
        throw new Error('No content found in response');
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Failed to import README');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size={pathname === '/' ? 'lg' : 'default'}
          disabled={markdown.trim().length > 0}
        >
          Import Repository
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import from GitHub</DialogTitle>
          <DialogDescription>
            Enter a GitHub repository URL to import its README.
            <br />
            (This will overwrite your current content)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-3">
            <Label htmlFor="url">Repository URL</Label>
            <Input
              id="url"
              placeholder="https://github.com/owner/repo"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleImport();
              }}
            />
          </div>
        </div>
        <DialogFooter
          className='flex flex-row justify-start! items-center gap-6'
        >
          <span>
          <Button
            onClick={handleImport} disabled={loading || !url}
            variant='green'
            size='sm'
          >
            {loading && <Loader2 className="mr-0 h-5 w-5
            animate-spin" />}
            {loading ? 'Importing' : 'Import'}
          </Button>
          </span>

          <span>
          <Button
            variant="outline" onClick={() => setOpen(false)}
            size='sm'
          >
            Cancel
          </Button>
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
