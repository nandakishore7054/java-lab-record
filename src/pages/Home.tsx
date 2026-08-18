import { useState } from 'react';
import {
  BookOpen,
  User,
  Hash,
  GraduationCap,
  Building2,
  ArrowRight,
  FileDown,
  Calendar,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { WEEKS } from '../data/weeks';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60 mb-4">
            <Sparkles size={13} className="text-indigo-600" />
            <span>Digital Laboratory Record · Academic Year 2025–26</span>
          </div>

          <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">
            Siddhartha Academy of Higher Education
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 font-serif leading-tight tracking-tight mb-3">
            Advanced Java Programming
            <span className="block text-indigo-600">Laboratory Record</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
            A comprehensive, verified digital soft-copy covering six weeks of Advanced Java experiments:
            JDK configuration, UCanAccess Microsoft Access connectivity, NetBeans IDE integration, and complete MySQL JDBC CRUD operations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('week1')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-indigo-600 text-white transition-all shadow-xs hover:shadow-md"
            >
              <span>Explore Week 1</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="/records/week1.pdf"
              download="Week-1-Lab-Record.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-200/70"
            >
              <FileDown size={16} className="text-slate-500" />
              <span>Download Record PDFs</span>
            </a>
          </div>
        </div>
      </div>

      {/* Student Information Card */}
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden">
        {/* Card Header */}
        <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User size={16} className="text-indigo-600" />
            <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900">
              Student Profile & Academic Credentials
            </h2>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
            <CheckCircle2 size={12} className="text-emerald-600" />
            <span>Verified Candidate</span>
          </span>
        </div>

        {/* Profile Card Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
            
            {/* Real Profile Image */}
            <div className="relative group flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-indigo-500/15 shadow-md bg-slate-100 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="G Nanda Kishore Nikhith"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-bold flex items-center justify-center text-2xl">
                    GNK
                  </div>
                )}
              </div>
            </div>

            {/* Main Info */}
            <div className="text-center sm:text-left min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-serif">
                  G Nanda Kishore Nikhith
                </h3>
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  24EU08155
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-700 mb-1">
                Department of Information Technology
              </p>
              <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5">
                <Building2 size={13} className="text-slate-400" />
                <span>Siddhartha Academy of Higher Education</span>
              </p>
            </div>

          </div>

          {/* Academic Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
            {[
              { label: 'Roll Number', value: '24EU08155', icon: Hash, mono: true },
              { label: 'Academic Class', value: 'III/IV B.Tech IT-C', icon: GraduationCap },
              { label: 'Department', value: 'Information Technology', icon: Building2 },
              { label: 'Semester', value: 'Semester VI (3rd Year)', icon: Calendar },
              { label: 'Laboratory', value: 'Advanced Java Programming', icon: BookOpen },
              { label: 'Institution', value: 'SAHE Campus', icon: Building2 },
              { label: 'Experiments', value: '06 Completed Modules', icon: Layers },
              { label: 'Status', value: 'Lab Record Submitted', icon: CheckCircle2 },
            ].map(({ label, value, icon: Icon, mono }) => (
              <div key={label} className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 mb-1">
                  <Icon size={13} className="text-slate-400" />
                  <span>{label}</span>
                </div>
                <div className={`text-xs sm:text-sm font-semibold text-slate-900 truncate ${mono ? 'font-mono' : ''}`}>
                  {value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Record Overview & Weekly Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
              Laboratory Experiments Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Six weekly modules with full procedure, source code, outputs, and downloadable PDF records.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200 hidden sm:inline-block">
            Weeks 01–06
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WEEKS.map((w) => (
            <div
              key={w.slug}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                    WEEK {String(w.id).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {w.topics.length} topics covered
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug font-serif mb-2">
                  {w.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {w.shortDesc}
                </p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5">
                  {w.topics.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-slate-100/80 text-slate-600 border border-slate-200/60"
                    >
                      {t}
                    </span>
                  ))}
                  {w.topics.length > 4 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md font-medium bg-slate-100 text-slate-400">
                      +{w.topics.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate(w.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>View Full Record</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={w.pdfUrl}
                  download={`Week-${w.id}-Lab-Record.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs transition-colors"
                  title={`Download Week ${w.id} PDF`}
                >
                  <FileDown size={13} className="text-slate-500" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
