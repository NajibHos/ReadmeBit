'use client';

import Link from "next/link";
import TemplateSelector from "../TemplateSelector";
import { Button } from "../ui/button";

export default function Templates() {
  return (
    <div className="section-container">
      <div className="section-layout">
        <div className="h-auto w-full flex flex-col gap-4">
          <div className="text-container">
            <h2 className="text-heading">
              Share Your Feedback
            </h2>
          </div>
          <div className="text-container">
            <p className="text-subheading">
              Your feedback would really help us to build a better product.
            </p>
          </div>
        </div>

        <div className="h-auto w-full flex justify-center items-center gap-6">
          <div className="h-auto w-auto">
            <Link href='/feedback'>
            <Button variant="blue">
              Share Feedback
            </Button>
            </Link>
          </div>
          <div className="h-auto w-auto">
            <Link href='/create-readme'>
            <Button variant="secondary">
              Launch Editor
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}