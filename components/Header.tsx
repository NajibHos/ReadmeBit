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
            {/* <h2 className="text-2xl lg:text-3xl font-workSans font-semibold
              text-gray-900 dark:text-white cursor-pointer"
            >
              ReadmeBit
              <sub className="text-sm px-2 py-1 ml-2 bg-gray-100
                dark:bg-gray-900 rounded"
              >
                Beta
              </sub>
            </h2> */}
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
              href="#"
              target="_blank"
            >
              <Button variant="secondary" size="icon" disabled>
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