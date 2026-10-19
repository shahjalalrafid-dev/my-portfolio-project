"use client";

import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-white/10 bg-[#07090f]">
      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Career Journey & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience & Enterprise Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            A successful 3-year career in enterprise banking managing high-volume financial workflows before channeling that precision into modern full-stack web engineering.
          </p>
        </div>

        {/* Why Banking Experience Accelerates My Coding Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-emerald-950/30 border border-cyan-500/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider font-mono">
                <Zap className="w-4 h-4" />
                <span>The Unfair Advantage: From Banking to Code</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                How Managing 20M+ BDT Daily Informs Software Architecture
              </h3>
              <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
                In banking, a single misplaced digit compromises the entire ledger. That exact zero-defect discipline translates directly into clean API design, transactional atomicity, defensive error handling, and robust database architecture.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
              <div className="text-left">
                <div className="text-lg font-black text-white font-mono">100%</div>
                <div className="text-[11px] text-gray-400">System Accuracy Record</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Roles */}
        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Index badge */}
                <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span>Phase 0{3 - idx}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono">
                    Core Operational Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-emerald-400 font-mono mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-2">
                      Disciplines Applied:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsApplied.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
