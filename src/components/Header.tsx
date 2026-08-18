import { Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          
          {/* Left section: Mobile Toggle + Profile Avatar + Student Info */}
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Mobile menu trigger */}
            <button
              onClick={onToggleSidebar}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              aria-label="Toggle navigation menu"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Profile Avatar */}
            <div className="relative flex-shrink-0 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-indigo-500/20 shadow-xs bg-slate-100 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="G Nanda Kishore Nikhith"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-bold flex items-center justify-center text-sm tracking-wider">
                    NK
                  </div>
                )}
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Student Active" />
            </div>

            {/* Student metadata on desktop */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-slate-900 truncate tracking-tight">
                  G Nanda Kishore Nikhith
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  24EU08155
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate">
                <GraduationCap size={13} className="text-slate-400 flex-shrink-0" />
                <span>III/IV B.Tech IT-C</span>
                <span className="hidden lg:inline text-slate-300">·</span>
                <span className="hidden lg:inline text-slate-500">Department of Information Technology</span>
              </div>
            </div>
          </div>

          {/* Center / Right: Academic Institution & Lab Record Badge */}
          <div className="flex flex-col items-end text-right flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-indigo-600">
              <BookOpen size={13} className="text-indigo-600" />
              <span>Siddhartha Academy of Higher Education</span>
            </div>
            <h1 className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight mt-0.5">
              Advanced Java Programming <span className="font-normal text-slate-500 hidden sm:inline">Lab Record</span>
            </h1>
            <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Department of Information Technology
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
