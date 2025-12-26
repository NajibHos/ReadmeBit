'use client';

import { useReadmeWidgets } from "@/lib/readme-context";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export default function ConfirmDialog() {

  const { clearAll } = useReadmeWidgets();

  return (
    <div className="h-auto w-auto">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Clear All</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              All data will be lost. This action can not be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="h-auto w-auto mt-1.5">
            <Button onClick={() => clearAll()} variant="alert">
              Yes, Clear all widgets
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
