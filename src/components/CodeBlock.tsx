import { useState } from 'react';
import { Copy, Check, Terminal, Coffee, Database, Play } from 'lucide-react';

interface CodeBlockProps {
  lang: 'java' | 'sql' | 'terminal' | 'output';
  label?: string;
  code: string;
}

const CONFIG = {
  java: {
    bg: '#090d16',
    headerBg: '#0f172a',
    accent: '#38bdf8',
    icon: Coffee,
    label: 'Java Source',
    badgeBg: '#0369a1',
    badgeText: '#e0f2fe',
    textColor: '#f8fafc',
  },
  sql: {
    bg: '#090d16',
    headerBg: '#0f172a',
    accent: '#60a5fa',
    icon: Database,
    label: 'SQL Query',
    badgeBg: '#1d4ed8',
    badgeText: '#dbeafe',
    textColor: '#f8fafc',
  },
  terminal: {
    bg: '#090d16',
    headerBg: '#0f172a',
    accent: '#4ade80',
    icon: Terminal,
    label: 'Ubuntu Terminal',
    badgeBg: '#15803d',
    badgeText: '#dcfce7',
    textColor: '#86efac',
  },
  output: {
    bg: '#090d16',
    headerBg: '#0f172a',
    accent: '#a78bfa',
    icon: Play,
    label: 'Console Output',
    badgeBg: '#6d28d9',
    badgeText: '#ede9fe',
    textColor: '#e2e8f0',
  },
};

export default function CodeBlock({ lang, label, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const cfg = CONFIG[lang];
  const Icon = cfg.icon;
  const displayLabel = label || cfg.label;

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800/80 shadow-xs my-4 bg-slate-950">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800"
        style={{ background: cfg.headerBg }}
      >
        <div className="flex items-center gap-3">
          {/* Subtle terminal dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
          </div>

          {/* Language / File Label */}
          <div className="flex items-center gap-1.5 ml-1">
            <Icon size={14} style={{ color: cfg.accent }} />
            <span className="text-xs font-mono font-semibold tracking-wide text-slate-200">
              {displayLabel}
            </span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
            copied
              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
          }`}
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code container */}
      <div className="overflow-x-auto p-4 sm:p-5" style={{ background: cfg.bg }}>
        <pre
          className="text-xs sm:text-[13px] leading-relaxed m-0 font-mono"
          style={{
            color: cfg.textColor,
            whiteSpace: 'pre',
            tabSize: 2,
          }}
        >
          {code.trim()}
        </pre>
      </div>
    </div>
  );
}
