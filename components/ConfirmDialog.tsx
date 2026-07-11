'use client';

import { useReadmeWidgets } from "@/lib/readme-context";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export default function ConfirmDialog() {
  const [open, setOpen] = useState(false);
  const { clearAll } = useReadmeWidgets();

  return (
    <div className="h-auto w-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="px-4 py-2 text-sm font-workSans font-medium shadow-sm
            rounded bg-red-700 text-white hover:bg-red-700/60"
          >
            Clear All
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              All data will be lost. This action can't be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="h-auto w-auto mt-1.5 flex flex-row justify-start! items-center
            gap-4"
          >
            <span>
            <button
              className="px-4 py-2 text-sm font-workSans font-medium
              rounded bg-red-700 text-white hover:bg-red-700/60"
              onClick={() => clearAll()}
            >
              Yes, Clear all widgets
            </button>
            </span>

            <span>
            <button
              className="px-4 py-2 text-sm font-workSans font-medium shadow-sm
              rounded bg-secondary hover:bg-gray-200 dark:hover:bg-gray-50/60 text-black dark:text-white dark:hover:text-black"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
