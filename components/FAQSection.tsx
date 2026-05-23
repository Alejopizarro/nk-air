"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Preguntas frecuentes",
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-cyan-brand transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
