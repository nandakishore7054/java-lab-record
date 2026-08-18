import { CheckCircle2 } from 'lucide-react';

interface ResultBoxProps {
  text: string | string[];
}

export default function ResultBox({ text }: ResultBoxProps) {
  const lines = Array.isArray(text) ? text : [text];
  return (
    <div className="rounded-2xl p-5 sm:p-6 mt-8 bg-emerald-50/80 border border-emerald-200/90 shadow-2xs flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
        <CheckCircle2 size={22} className="text-emerald-600" />
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold font-mono tracking-wider uppercase text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded border border-emerald-200/60">
            Experiment Conclusion
          </span>
          <span className="text-xs font-semibold text-emerald-700">Verified Output</span>
        </div>

        <div className="space-y-1.5 pt-0.5">
          {lines.map((line, i) => (
            <p key={i} className="text-xs sm:text-sm text-emerald-950 font-normal leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
