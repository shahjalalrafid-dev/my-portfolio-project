"use client";

import { useState } from "react";
import {
  Code2,
  Database,
  Wrench,
  BrainCircuit,
  CheckCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    "Frontend Development": Code2,
    "Backend & Database": Database,
    "Tools & DevOps Workflow": Wrench,
    "Core Analytical Competencies": BrainCircuit,
  };

  const tabs = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeTab === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeTab);

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "Proficient":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30";
      case "Competent":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      case "In Progress":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      default:
        return "bg-gray-500/15 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="relative py-24 border-t border-white/10 bg-[#07090f]">
      {/* Subtle glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Skills & Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Frontend-focused architectural mastery paired with full-stack JavaScript growth, backed by deep engineering fundamentals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 font-bold scale-[1.02]"
                  : "bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {tab === "Frontend Development" ? "Frontend (Pro State)" : tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;
            return (
              <div
                key={category.title}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                        category.badge === "Specialty"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : "bg-white/10 text-gray-300 border-white/20"
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills List with Visual Graphical Meters */}
                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-medium text-gray-200 flex items-center gap-1.5">
                            {skill.highlight && (
                              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            )}
                            <span className={skill.highlight ? "text-white font-semibold" : ""}>
                              {skill.name}
                            </span>
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getLevelBadgeClass(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                            <span className="font-mono text-gray-400 text-xs w-8 text-right">
                              {skill.percent}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar graphical element */}
                        <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden p-[1px]">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ease-out ${
                              skill.highlight
                                ? "bg-gradient-to-r from-emerald-500 to-cyan-400"
                                : "bg-gradient-to-r from-emerald-600/70 to-teal-500/70"
                            }`}
                            style={{ width: `${skill.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 font-mono">
                  Verified through active code projects & client implementations
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
