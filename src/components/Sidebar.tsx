import { Home, FileText, X, ChevronRight, Download, GraduationCap } from 'lucide-react';
import { WEEKS } from '../data/weeks';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ activePage, onNavigate, open, onClose }: SidebarProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50 md:z-0
          w-72 sm:w-80 md:w-64 lg:w-72 flex-shrink-0 h-full
          bg-white border-r border-slate-200
          flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Top Header on Mobile */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 tracking-wider uppercase">
            <FileText size={15} className="text-indigo-600" />
            <span>Lab Record Navigation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-6">
          
          {/* Main Navigation Section */}
          <div>
            <div className="px-3 pb-2 text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Overview
            </div>
            <button
              onClick={() => handleNav('home')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activePage === 'home'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs border border-indigo-200/60 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Home size={16} className={activePage === 'home' ? 'text-indigo-600' : 'text-slate-400'} />
                <span>Lab Overview & Info</span>
              </div>
              {activePage === 'home' && <ChevronRight size={14} className="text-indigo-500" />}
            </button>
          </div>

          {/* Weekly Experiments Section */}
          <div>
            <div className="flex items-center justify-between px-3 pb-2 text-[11px] font-bold tracking-wider uppercase text-slate-400">
              <span>Weekly Records</span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-semibold">
                6 Weeks
              </span>
            </div>

            <div className="space-y-1">
              {WEEKS.map((w) => {
                const isActive = activePage === w.slug;
                return (
                  <div key={w.slug} className="group relative">
                    <button
                      onClick={() => handleNav(w.slug)}
                      className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-indigo-50/90 text-indigo-900 shadow-xs border border-indigo-200/80'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                      }`}
                    >
                      {/* Week Badge */}
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center mt-0.5 transition-colors ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200 group-hover:text-slate-900'
                        }`}
                      >
                        {String(w.id).padStart(2, '0')}
                      </span>

                      {/* Week Title & Description */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className={`text-xs font-semibold leading-tight ${isActive ? 'text-indigo-950 font-bold' : 'text-slate-800'}`}>
                          Week {w.id}
                        </div>
                        <div className={`text-[11px] leading-snug mt-0.5 line-clamp-1 ${isActive ? 'text-indigo-700/90' : 'text-slate-500'}`}>
                          {w.title}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick PDF Downloads Access */}
          <div className="pt-2 border-t border-slate-100">
            <div className="px-3 pb-2 text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Lab Record PDFs
            </div>
            <div className="grid grid-cols-3 gap-1.5 px-1">
              {WEEKS.map((w) => (
                <a
                  key={w.id}
                  href={w.pdfUrl}
                  download={`Week-${w.id}-Lab-Record.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-mono font-medium text-slate-600 bg-slate-100/70 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200/50 transition-colors"
                  title={`Download Week ${w.id} PDF`}
                >
                  <Download size={10} className="text-slate-400" />
                  <span>W{w.id}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Student Info Footer Card */}
        <div className="p-3 border-t border-slate-200 bg-slate-50/80">
          <div className="bg-white rounded-xl p-3 border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 flex-shrink-0 bg-slate-100">
                <img
                  src="/profile.jpg"
                  alt="Student"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 truncate">
                  G Nanda Kishore Nikhith
                </div>
                <div className="text-[11px] font-mono font-medium text-indigo-600">
                  24EU08155
                </div>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1 font-medium">
                <GraduationCap size={11} className="text-slate-400" />
                III/IV B.Tech IT-C
              </span>
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                Verified
              </span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}
