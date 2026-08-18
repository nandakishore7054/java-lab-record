import { type ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  accent?: boolean;
}

export default function Section({ title, children, accent }: SectionProps) {
  return (
    <section
      className={`rounded-2xl overflow-hidden mb-6 bg-white border transition-shadow duration-200 ${
        accent
          ? 'border-indigo-200 shadow-xs ring-1 ring-indigo-500/10'
          : 'border-slate-200/80 shadow-xs'
      }`}
    >
      {/* Section Header */}
      <div
        className={`px-6 py-3.5 flex items-center justify-between border-b ${
          accent
            ? 'bg-indigo-50/50 border-indigo-100'
            : 'bg-slate-50/80 border-slate-200/80'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`w-1.5 h-4 rounded-full ${
              accent ? 'bg-indigo-600' : 'bg-slate-700'
            }`}
          />
          <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900">
            {title}
          </h3>
        </div>
      </div>

      {/* Section Content */}
      <div className="p-6 sm:p-7 text-sm leading-relaxed text-slate-700 space-y-4">
        {children}
      </div>
    </section>
  );
}
