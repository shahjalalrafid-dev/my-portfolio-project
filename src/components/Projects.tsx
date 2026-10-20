"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Info,
  ArrowUpRight,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-24 border-t border-white/10 bg-[#080b11] overflow-hidden w-full max-w-full">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[300px] sm:w-[600px] h-[250px] sm:h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-[300px] sm:w-[600px] h-[250px] sm:h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Selected Works
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & Real-World Deployments
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300 leading-relaxed">
            Every project represents solving a real challenge — combining reactive frontend architectures with clean logic, user accessibility, and performance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden w-full"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101b] via-transparent to-transparent opacity-80" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-emerald-300 border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Number index badge */}
                <div className="absolute top-3 right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[10px] sm:text-xs font-mono text-gray-300">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-white/[0.04] text-[10px] sm:text-[11px] font-mono text-gray-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex flex-col gap-2">
                  {/* Primary "View More / Details" Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/30 hover:border-emerald-500 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <Info className="w-4 h-4 shrink-0" />
                    <span>View More / Details</span>
                  </button>

                  {/* Secondary Quick Links (Live Demo & GitHub) */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/10 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>Code (Client)</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Modal View for Detailed Project Breakdown */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
