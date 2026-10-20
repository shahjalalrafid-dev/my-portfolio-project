"use client";

import Image from "next/image";
import {
  Download,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  ShieldCheck,
  Code2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, HIGHLIGHT_STATS } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden w-full max-w-full">
      {/* Ambient background glows with strict containment */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[300px] sm:h-[450px] bg-emerald-500/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[350px] bg-cyan-500/10 blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[350px] bg-indigo-500/10 blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Designation, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-medium mb-5 shadow-sm shadow-emerald-500/10 max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Name & Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] break-words w-full">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Designation & Subtitle */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base sm:text-xl font-semibold text-gray-200">
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-emerald-300 text-sm sm:text-lg">
                Full Stack Web Developer
              </span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-gray-300 font-normal text-sm sm:text-lg">
                Frontend Architecture Specialist
              </span>
            </div>

            {/* Introduction Paragraph */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Transitioned from a successful
              <strong className="text-white font-semibold"> Banking Career </strong>
              and holding a <strong className="text-white font-semibold">B.Sc. in Civil Engineering from BUET</strong>. 
              I engineer responsive, accessible, and resilient web solutions using React, Next.js, and modern MERN architectures.
            </p>

            {/* Action Buttons: Resume Download & Projects */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Md_Shahjalal_Rafid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black hover:from-emerald-400 hover:to-cyan-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 hover:border-emerald-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="mt-6 sm:mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono mr-1">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-emerald-400/30 transition-all text-xs font-medium"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/30 transition-all text-xs font-medium"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-green-400/30 transition-all text-xs font-medium"
                title="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-amber-400/30 transition-all text-xs font-medium"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center relative w-full px-2 sm:px-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-70 pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0e1322] border-2 border-white/15 shadow-2xl">
                <div className="aspect-[4/5] relative w-full overflow-hidden bg-gradient-to-b from-slate-900 to-[#0b0f19]">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
                    priority
                    className="object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle dark gradient overlay at base of image for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b11] via-[#080b11]/70 to-transparent" />
                  
                  {/* Name badge at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">{PERSONAL_INFO.name}</p>
                      <p className="text-[10px] sm:text-[11px] text-emerald-400 font-mono truncate">Associate Full Stack Developer <span className="lg:inline-block hidden">• Pro Frontend</span> </p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 ml-2" />
                  </div>
                </div>
              </div>

              {/* Responsive Badges: Safely contained on all screen sizes */}
              <div className="mt-3 sm:mt-0 sm:absolute sm:-top-3 sm:-left-4 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2">
                <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono">Alumnus</p>
                  <p className="text-xs font-bold text-white whitespace-nowrap">BUET Civil Eng.</p>
                </div>
              </div>

              <div className="mt-2 sm:mt-0 sm:absolute sm:-bottom-4 sm:-right-4 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2">
                <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider font-mono">Track Record</p>
                  <p className="text-xs font-bold text-white whitespace-nowrap">Fast-Track Adaptability</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlights Stats Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
          {HIGHLIGHT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-emerald-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200 mt-1">{stat.label}</div>
              <div className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 line-clamp-1">{stat.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
