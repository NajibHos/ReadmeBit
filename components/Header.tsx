import { Github } from "lucide-react";
import Link from "next/link";
import ToggleTheme from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="h-auto w-full py-5 flex justify-center items-center">
      <div className="h-auto w-[90%] flex justify-between items-center">
        <div className="h-auto w-auto">
          <Link href='/'>
            <img
              src="/logo.png"
              alt="ReadmeBit Logo"
              className="rounded h-12 w-auto"
            />
          </Link>
        </div>
        <div className="h-auto w-auto flex justify-center items-center
          gap-5"
        >
          <div className="h-auto w-auto">
            <a
              href="https://github.com/NajibHos/ReadmeBit"
              target="_blank"
            >
              <Button variant="secondary" size="icon">
                <Github />
              </Button>
            </a>
          </div>

          {/* Theme toggle component */}
          <ToggleTheme />
        </div>
      </div>
    </div>
  )
}