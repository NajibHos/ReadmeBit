import { ArrowDownToLine, DatabaseZap, SquareMousePointer, Underline, UserRoundCheck, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Features() {
  return (
    <div className="section-container">
      <div className="section-layout">
        <div className="h-auto w-full flex flex-col justify-center items-center
          gap-4"
        >
          <div className="text-container">
            <h2 className="text-heading">
              Why ReadmeBit?
            </h2>
          </div>
          <div className="text-container">
            <p className="text-subheading">
              Six powerful features that make readme creation effortless.
            </p>
          </div>
        </div>
        <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 gap-8"
        >
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-green-700 bg-green-50 dark:bg-green-950/30 ring-green-700/30"
                >
                  <SquareMousePointer className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                Widget Based Editing
              </CardTitle>
              <CardDescription>
                Choose widgets or write markdown manually with text formatting.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-red-700 bg-red-50 dark:bg-red-950/30 ring-red-700/30"
                >
                  <Zap className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                Instant Preview
              </CardTitle>
              <CardDescription>
                See GitHub style README update live as you edit your content.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-blue-700 bg-blue-50 dark:bg-blue-950/30 ring-blue-700/30"
                >
                  <ArrowDownToLine className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                Export Easily
              </CardTitle>
              <CardDescription>
                Copy markdown text or download README.md file with one click.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-teal-700 bg-teal-50 dark:bg-teal-950/30 ring-teal-700/30"
                >
                  <UserRoundCheck className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                No Login Required
              </CardTitle>
              <CardDescription>
                Start creating READMEs instantly without any signup process.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-pink-700 bg-pink-50 dark:bg-pink-950/30 ring-pink-700/30"
                >
                  <Underline className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                Markdown Toolbar
              </CardTitle>
              <CardDescription>
                Easily format your text with a built-in toolbar for bold, italic,
                linethrough, code and links.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <div className="mb-2">
                <span className="inline-flex rounded-lg p-3 ring-2 ring-inset
                  text-orange-700 bg-orange-50 dark:bg-orange-950/30
                  ring-orange-700/30"
                >
                  <DatabaseZap className="h-6 w-6" />
                </span>
              </div>
              <CardTitle>
                Local Storage Support
              </CardTitle>
              <CardDescription>
                Your progress stays saved in your browser's local storage
                automatically.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}