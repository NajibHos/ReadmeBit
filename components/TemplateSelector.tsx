'use client';

import { useReadmeMarkdown } from "@/lib/readme-context";
import { useRouter } from "next/navigation";
import { templates } from "@/lib/templates";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function TemplateSelector() {
  const router = useRouter();
  const { updateMarkdown } = useReadmeMarkdown();

  const handlePreviewTemplate = (content: string) => {
    updateMarkdown(content);
    router.push('/preview-readme');
  }

  const handleSelectTemplate = (content: string) => {
    updateMarkdown(content);
    router.push('/create-readme');
  }

  return (
    // <div className="h-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
    //   {
    //     templates.map((template) => (
    //       <div className="h-auto w-full p-6 flex flex-col gap-3 border
    //         border-[#E0E0E0] dark:border-stone-700 rounded-lg shadow-sm"
    //         key={template.id}
    //       >
    //         <div className="h-auto w-full text-left">
    //           <h2 className="text-lg font-inter font-medium text-slate-700!
    //             dark:text-slate-300!"
    //           >
    //             {template.name}
    //           </h2>
    //         </div>
    //         <div className="h-auto w-full text-left">
    //           <h2 className="text-body"
    //           >
    //             {template.description}
    //           </h2>
    //         </div>
    //         <div className="h-auto w-auto mt-2">
    //           <Button
    //             onClick={() => handleSelectTemplate(template.content)}
    //             variant="teal"
    //             size="sm"
    //           >
    //             Use Template
    //           </Button>
    //         </div>
    //       </div>
    //     ))
    //   }
    // </div>
    <div className="h-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      {
        templates.map((template) => (
          <Card
            key={template.id}
            className="h-auto w-full"
          >
            <CardHeader>
              <CardTitle>
                {template.name}
              </CardTitle>
              <CardDescription>
                {template.description}
              </CardDescription>
              <CardContent className="h-auto w-full flex gap-6">
                <div>
                  <Button
                    onClick={() => handlePreviewTemplate(template.content)}
                    variant="teal"
                    size="sm"
                  >
                    Preview
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() => handleSelectTemplate(template.content)}
                    variant="secondary"
                    size="sm"
                  >
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))
      }
    </div>
  )
}