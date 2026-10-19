"use client";

import {
  Code,
  Dumbbell,
  Binary,
  BookOpen,
  Trophy,
  Workflow,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { ABOUT_DETAILS, PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const personalityPillars = [
    {
      title: "Structural Engineering Logic",
      tag: "BUET Foundation",
      description:
        "Trained to view web architectures like physical structures — evaluating stress points, calculating modularity, and building for systemic durability.",
      icon: Layers,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    },
    {
      title: "High-Volume Precision",
      tag: "Banking Heritage",
      description:
        "Managing 20M+ BDT daily financial operations cemented an uncompromising zero-defect mindset and deep respect for transaction atomicity.",
      icon: Workflow,
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400",
    },
    {
      title: "Modern Frontend Mastery",
      tag: "Pro State",
      description:
        "Passionate about turning Figma mockups into responsive, accessible, pixel-perfect React and Next.js interfaces that users love.",
      icon: Cpu,
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400",
    },
    {
      title: "Active Discipline & Growth",
      tag: "Lifestyle & Fitness",
      description:
        "Committed to disciplined physical training (which inspired my FitLog project) and solving algorithmic puzzles to keep my problem-solving sharp.",
      icon: Dumbbell,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400",
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/10 bg-[#080b11]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            About Me & My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Precision Meets Modern Web Craftsmanship
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            From civil structural modeling at BUET and high-responsibility banking workflows to architecting reactive full-stack web applications.
          </p>
        </div>

        {/* Main Narrative & Story Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Detailed Background */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>The Story Behind My Career Transition</span>
              </h3>

              {ABOUT_DETAILS.story.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-3">
                  What I Bring to Engineering Teams:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pixel-perfect responsive Next.js / React UIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>End-to-end RESTful API development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-volume computational accuracy mindset</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean code & scalable component systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick summary statement */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/25">
              <p className="text-emerald-200 text-sm sm:text-base italic leading-relaxed">
                &ldquo;I believe great software is more than code that works. It’s a thoughtful, resilient solution to a real problem, engineered with the people who use it in mind.&rdquo;
              </p>
              <p className="mt-2 text-xs font-mono font-bold text-emerald-400">— Md. Shahjalal Rafid</p>
            </div>
          </div>

          {/* Right Column: 4 Distinct Pillars / Personality & Passions */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {personalityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                        {pillar.tag}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Hobbies / Interests Row */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-3">
                Interests & Hobbies Outside Code:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/20">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>Fitness & Weightlifting</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20">
                  <Binary className="w-3.5 h-3.5" />
                  <span>Algorithmic Logic</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Sports Strategy</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-xs border border-purple-500/20">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Continuous Architecture</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
