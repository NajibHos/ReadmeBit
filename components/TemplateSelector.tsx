'use client';

import { useReadmeMarkdown } from "@/lib/readme-context";
import { useRouter } from "next/navigation";
import { templates } from "@/lib/templates";
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
    <div className="h-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
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
              <CardContent className="h-auto w-full mt-1.5 flex gap-4">
                <div>
                  <button
                    onClick={() => handlePreviewTemplate(template.content)}
                    className="px-3.5 py-1.5 text-sm font-workSans font-medium shadow-sm
                    rounded bg-blue-700 text-white hover:bg-blue-700/60"
                  >
                    Preview
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleSelectTemplate(template.content)}
                    className="px-3.5 py-1.5 text-sm font-workSans font-medium shadow-sm
                    bg-secondary hover:bg-gray-200 dark:hover:bg-gray-50/60 text-black dark:text-white dark:hover:text-black rounded"
                  >
                    Use Template
                  </button>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        ))
      }
    </div>
  )
}