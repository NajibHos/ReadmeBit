'use client';

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton() {
  
  const { pending } = useFormStatus();

  return (
    <div className="h-auto w-full mt-2">
      <Button 
        type="submit"
        variant="blue"
        disabled={pending}
        className="w-full" 
      >
        {pending ? 'Submitting...' : 'Submit'}
      </Button>
    </div>
  )
}