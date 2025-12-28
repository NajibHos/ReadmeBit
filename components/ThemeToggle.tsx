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
          variant="outline"
          size="icon-sm"
        >
          <Sun />
        </Button>
      }
      {
        resolvedTheme === 'dark' && <Button
          onClick={() => setTheme('light')}
          variant="outline"
          size="icon-sm"
        >
          <Moon />
        </Button>
      }
    </div>
  )
}