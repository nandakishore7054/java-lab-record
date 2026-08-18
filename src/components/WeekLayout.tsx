import { type ReactNode } from 'react';
import { ChevronRight, FileDown } from 'lucide-react';
import { WEEKS } from '../data/weeks';

interface WeekLayoutProps {
  weekNum: number;
  title: string;
  children: ReactNode;
}

export default function WeekLayout({ weekNum, title, children }: WeekLayoutProps) {
  const currentWeek = WEEKS.find((w) => w.id === weekNum);
  const pdfPath = currentWeek?.pdfUrl || `/records/week${weekNum}.pdf`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      
      {/* Top Breadcrumb & Action Row */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <span className="font-medium hover:text-slate-900 transition-colors">Lab Record</span>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
            Week {weekNum}
          </span>
        </nav>

        {/* Top Mini PDF Download */}
        <a
          href={pdfPath}
          download={`Week-${weekNum}-Lab-Record.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-900 border border-indigo-200/80 transition-all shadow-2xs"
          title={`Download Week ${weekNum} Original PDF`}
        >
          <FileDown size={14} className="text-indigo-600" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Week Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-600 text-white font-mono font-bold text-lg sm:text-xl flex items-center justify-center shadow-xs flex-shrink-0">
              {String(weekNum).padStart(2, '0')}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                <span>Experiment Record</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-mono">Week — {weekNum}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif leading-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Prominent Action Button for PDF */}
          <div className="flex-shrink-0 flex items-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
            <a
              href={pdfPath}
              download={`Week-${weekNum}-Lab-Record.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-all duration-200 hover:shadow-md"
            >
              <FileDown size={16} />
              <span>Download Week {weekNum} PDF</span>
            </a>
          </div>

        </div>

        {/* Topics Chips */}
        {currentWeek?.topics && currentWeek.topics.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">Topics:</span>
            {currentWeek.topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6">
        {children}
      </div>

      {/* Bottom Download Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300">
            Verified Laboratory Submission
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
            Week {weekNum} Original Lab Record Document
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Department of Information Technology · Siddhartha Academy of Higher Education
          </p>
        </div>
        <a
          href={pdfPath}
          download={`Week-${weekNum}-Lab-Record.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shadow-xs flex-shrink-0"
        >
          <FileDown size={16} />
          <span>Download Week {weekNum} PDF</span>
        </a>
      </div>

    </div>
  );
}
