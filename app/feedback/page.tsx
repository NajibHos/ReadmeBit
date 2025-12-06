'use client';

import { CreateFeedBack } from "@/actions/create-feedback";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Feedback",
  "url": "https://readmebit.com/feedback",
  "description": "Share feedback and suggestions to help improve ReadmeBit. Your input contributes to new features and updates.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://readmebit.com"
  }
}

export default function Feedback() {

  async function formAction (formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const feedback = formData.get('feedback') as string;

    const res = await CreateFeedBack(name, email, feedback);

    if (res?.res && res?.res === 'Failed') {
      console.error(res.error);
      toast.error('Error creating feedback, try again');
    } else {
      toast.success('Thanks for the feedback');
    }
  }

  return (
    <div className="section-container">
      <div className="section-layout">
        <div className="h-auto w-full flex flex-col justify-center items-center
          gap-4"
        >
          <div className="text-container">
            <h2 className="text-heading">
              Feedback
            </h2>
          </div>
          <div className="text-container">
            <p className="text-subheading">
              Tell us what we can improve through your feedbacks.
            </p>
          </div>
        </div>

        <div className="h-auto w-full md:w-[80%] lg:w-[50%]">
          <form action={formAction} className="h-auto w-full flex flex-col gap-6">
            <div className="h-auto w-full grid items-center gap-3">
              <Label htmlFor="name">Name *</Label>
              <Input
                name="name"
                id="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>
            <div className="h-auto w-full grid items-center gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                name="email"
                id="email"
                type="email"
                required
                placeholder="Your email"
              />
            </div>
            <div className="h-auto w-full grid items-center gap-3">
              <Label htmlFor="feedback">Feedback *</Label>
              <Textarea
                id="feedback"
                name="feedback"
                placeholder="Share your feedback with us"
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  )
}