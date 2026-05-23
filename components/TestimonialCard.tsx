interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  stars?: number;
  featured?: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  stars = 5,
  featured = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white border border-slate-100 rounded-2xl flex flex-col ${
        featured ? "p-10" : "p-7"
      }`}
    >
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            className={`${featured ? "w-4 h-4" : "w-3.5 h-3.5"} text-amber-400`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p
        className={`text-gray-dark leading-relaxed flex-1 ${
          featured ? "text-lg" : "text-sm"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <div className={`${featured ? "mt-8" : "mt-5"} pt-5 border-t border-slate-100`}>
        <p className="font-semibold text-navy text-sm">{author}</p>
        <p className="text-slate-400 text-xs mt-0.5">{location}</p>
      </div>
    </div>
  );
}
