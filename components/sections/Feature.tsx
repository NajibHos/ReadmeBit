'use client';

import { ArrowDownToLine, Code, LayoutGrid, SquareMousePointer, UserRoundCheck, Zap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useTheme } from "next-themes";

export default function Features() {

  const { theme } = useTheme();

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
          {/* <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
          >
            <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2"
            >
              <Shapes
                size={28}
                className="text-darkest dark:text-lightest"
              />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-lg font-inter font-medium
                !text-section-title-light dark:!text-section-title-dark"
              >
                Widget Based Editing
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-sm font-inter font-medium
                text-body-text-light dark:text-body-text-dark"
              >
                Choose widgets or write markdown manually with text formatting.
              </p>
            </div>
          </div>
          <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
          >
            <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2">
              <Zap size={28} className="!text-stone-900 dark:!text-white" />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-lg font-inter font-medium
                !text-stone-800 dark:!text-stone-200"
              >
                Instant Preview
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-sm font-inter font-medium
                !text-stone-600 dark:!text-stone-400"
              >
                See GitHub style README update live as you edit your content.
              </p>
            </div>
          </div>
          <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
          >
            <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2">
              <ArrowDownToLine size={28} className="!text-stone-900
                dark:!text-white"
              />
            </div>
            <div className="h-auto w-full text-left">
              <h2 className="text-lg font-inter font-medium
                !text-stone-800 dark:!text-stone-200"
              >
                Export Easily
              </h2>
            </div>
            <div className="h-auto w-full text-left">
              <p className="text-sm font-inter font-medium
                !text-stone-600 dark:!text-stone-400"
              >
                Copy markdown text or download README.md file with one click.
              </p>
            </div>
          </div>
          <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
        >
          <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2">
            <UserRoundCheck size={28} className="!text-stone-900
              dark:!text-white"
            />
          </div>
          <div className="h-auto w-full text-left">
            <h2 className="text-lg font-inter font-medium
              !text-stone-800 dark:!text-stone-200"
            >
              No Login Required
            </h2>
          </div>
          <div className="h-auto w-full text-left">
            <p className="text-sm font-inter font-medium
              !text-stone-600 dark:!text-stone-400"
            >
              Start creating READMEs instantly without any signup process.
            </p>
          </div>
          </div>
          <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
        >
          <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2">
            <LayoutGrid size={28} className="!text-stone-900 dark:!text-white" />
          </div>
          <div className="h-auto w-full text-left">
            <h2 className="text-lg font-inter font-medium
              !text-stone-800 dark:!text-stone-200"
            >
              Clean Interface
            </h2>
          </div>
          <div className="h-auto w-full text-left">
            <p className="text-sm font-inter font-medium
              !text-stone-600 dark:!text-stone-400"
            >
              Focus on writing with a minimal and distraction free interface.
            </p>
          </div>
          </div>
          <div className="h-auto w-full p-6 flex flex-col justify-center
            items-start gap-3 border border-[#E0E0E0] dark:border-stone-700
            rounded-lg"
          >
          <div className="p-[14px] h-auto w-auto text-left rounded-[8px]
              bg-[#F9FBFF] dark:bg-stone-900 mb-2">
            <Code size={28} className="!text-stone-900 dark:!text-white" />
          </div>
          <div className="h-auto w-full text-left">
            <h2 className="text-lg font-inter font-medium
              !text-stone-800 dark:!text-stone-200"
            >
              Free & Open Source
            </h2>
          </div>
          <div className="h-auto w-full text-left">
            <p className="text-sm font-inter font-medium
              !text-stone-600 dark:!text-stone-400"
            >
              Completely free to use with source code available on GitHub.
            </p>
          </div>
          </div> */}
          
          <Card className="h-auto w-full">
            <CardHeader>
              <CardTitle>
                <SquareMousePointer />
              </CardTitle>
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
              <CardTitle>
                <Zap />
              </CardTitle>
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
              <CardTitle>
                <ArrowDownToLine />
              </CardTitle>
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
              <CardTitle>
                <UserRoundCheck />
              </CardTitle>
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
              <CardTitle>
                <LayoutGrid />
              </CardTitle>
              <CardTitle>
                Clean Interface
              </CardTitle>
              <CardDescription>
                Focus on writing with a minimal and distraction free interface.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-auto w-full">
            <CardHeader>
              <CardTitle>
                <Code />
              </CardTitle>
              <CardTitle>
                Free & Open Source
              </CardTitle>
              <CardDescription>
                Completely free to use with source code available on GitHub.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}