import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`group bg-white border border-slate-100 rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,43,94,0.1)] transition-all duration-300 ${className}`}
    >
      <div className="text-navy/35 group-hover:text-cyan-brand transition-colors duration-300 mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy tracking-tight mb-2.5">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-navy transition-colors duration-200 group/link"
      >
        Ver el servicio
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
