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
              <CardContent className="h-auto w-full mt-1.5 flex gap-6">
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
                    variant="outline"
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