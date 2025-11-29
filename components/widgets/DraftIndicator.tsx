import { useReadmeMarkdown } from '@/lib/readme-context';
import { Check, Ghost, Loader2 } from 'lucide-react';

export default function DraftIndicator() {
  const { saveStatus, lastSavedAtFormatted } = useReadmeMarkdown();

  if (saveStatus === 'idle') {
    return (
      <span className='flex justify-start items-center gap-2'>
        <span>
          <Ghost
            size={16}
            className="text-gray-700 dark:text-gray-300"
          />
        </span>
        <span>
          <h2 className='text-subheading text-sm!'>
            No draft found
          </h2>
        </span>
      </span>
    )

  } else if (saveStatus === 'saving') {
    return (
      <span className='flex justify-start items-center gap-2'>
        <span>
          <Loader2
            size={16}
            className='text-gray-700 dark:text-gray-300 animate-spin'
          />
        </span>
        <span>
          <h2 className='text-subheading text-sm!'>
            Saving draft
          </h2>
        </span>
      </span>
    )

  } else if (saveStatus === 'saved') {
    return (
      <span className='flex justify-start items-center gap-2'>
        <span>
          <Check
            size={16}
            className='text-green-600 dark:text-green-600'
          />
        </span>
        <span>
          <h2 className='text-sm! font-workSans font-medium text-green-600!
            dark:text-green-600!'
          >
            Draft saved {lastSavedAtFormatted ?
            ` ~ ${lastSavedAtFormatted}` : ''}
          </h2>
        </span>
      </span>
    )

  } else {
    return (
      <span className='flex justify-start items-center gap-2'>
        <span>
          <Ghost
            size={16}
            className="text-gray-700 dark:text-gray-300"
          />
        </span>
        <span>
          <h2 className='text-subheading text-sm!'>
            start editing to save draft
          </h2>
        </span>
      </span>
    )
  }
};