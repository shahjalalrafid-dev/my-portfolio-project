"use client";

import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
} from "lucide-react";
import { EDUCATION_ITEMS } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24 border-t border-white/10 bg-[#080b11] overflow-hidden w-full max-w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[450px] h-[250px] sm:h-[300px] bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[300px] sm:w-[450px] h-[250px] sm:h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Academic & Professional Training
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Educational Background & Certifications
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300 leading-relaxed">
            Rigorous engineering foundations from Bangladesh’s premier engineering university combined with intensive modern web development diplomas.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={item.institution}
              className="flex flex-col justify-between p-5 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group w-full"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Institution Icon & Period */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-gray-400 bg-white/[0.04] border border-white/10 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-400 mt-1 flex items-center gap-1.5">
                    <span>{item.institution}</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1 sm:pt-2">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 space-y-2">
                <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-400">
                  Key Learnings & Focus:
                </h4>
                <ul className="space-y-1.5">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
