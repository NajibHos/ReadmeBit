'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ToggleTheme() {

  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="h-auto w-auto">
      {
        resolvedTheme === 'light' && <Button
          onClick={() => setTheme('dark')}
          variant="secondary"
          size="icon"
        >
          <Sun />
        </Button>
      }
      {
        resolvedTheme === 'dark' && <Button
          onClick={() => setTheme('light')}
          variant="secondary"
          size="icon"
        >
          <Moon />
        </Button>
      }
    </div>
  )
}