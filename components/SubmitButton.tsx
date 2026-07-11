'use client';

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <div className="h-auto w-full mt-2">
      <button
        type="submit"
        disabled={pending}
        className="w-full py-2.5 text-sm font-medium text-white bg-blue-700
        hover:bg-blue-700/60 rounded"
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}