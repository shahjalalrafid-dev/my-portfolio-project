"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0c101b] border border-white/15 shadow-2xl z-10 animate-in zoom-in-95 duration-200 custom-scrollbar">
        
        {/* Modal Header Image Banner */}
        <div className="relative w-full h-48 sm:h-72 bg-gradient-to-br from-slate-900 to-[#0e1424] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c101b] via-[#0c101b]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gray-300 hover:text-white hover:bg-black/90 focus:outline-none transition-all cursor-pointer z-10"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on banner */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-1.5 sm:mb-2">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-1 sm:line-clamp-none">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          
          {/* Quick Actions (Live Link + GitHub) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-mono">Explore this project live:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all whitespace-nowrap"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GitHub (Client)</span>
              </a>
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-2 mb-2.5 sm:mb-3">
              <Cpu className="w-4 h-4" />
              <span>Main Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Detailed Description */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-2 mb-2.5 sm:mb-3">
              <Layers className="w-4 h-4" />
              <span>Project Overview & Scope</span>
            </h4>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-2 mb-2.5 sm:mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Architecture</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced While Developing */}
          <div className="p-4 sm:p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>Challenges Faced & Engineering Solutions</span>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <p className="font-bold text-white tracking-wide">
                    {idx + 1}. {item.title}
                  </p>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed pl-3 sm:pl-4 border-l-2 border-amber-500/40">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Improvements & Future Plans */}
          <div className="p-4 sm:p-6 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <Lightbulb className="w-4 h-4" />
              <span>Potential Improvements & Future Roadmap</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.futureImprovements.map((imp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <p className="text-[11px] sm:text-xs text-gray-400 font-mono">
            Developed by Md. Shahjalal Rafid
          </p>
          <button
            onClick={onClose}
            className="px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
