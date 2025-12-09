import { useReadmeMarkdown } from '@/lib/readme-context';
import { Check, Ghost, Loader2 } from 'lucide-react';

export default function DraftIndicator( { cursor } ) {
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
      <div className='flex justify-between items-center'>
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
      <span>
        {
          cursor ? (
            <h2 className='text-subheading text-sm!'>
              Cursor active
              <span className="h-2 w-2 ml-3 animate-ping rounded-full
              bg-sky-600 inline-flex opacity-75"></span>
            </h2>
          ) : (
            ''
          )
        }
      </span>
      </div>
    )

  } else if (saveStatus === 'saved') {
    return (
      <div className='flex justify-between items-center'>
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
      <span>
        {
          cursor ? (
            <h2 className='text-subheading text-sm!'>
              Cursor active
              <span className="h-2 w-2 ml-3 animate-ping rounded-full
              bg-sky-600 inline-flex opacity-75"></span>
            </h2>
          ) : ('')
        }
      </span>
      </div>
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