"use client";

import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070b] border-t border-white/10 text-gray-400 py-12 sm:py-16 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center justify-between">
          
          {/* Brand & Monogram */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1.5px] shrink-0">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-bold text-xs sm:text-sm text-white">
                  <span className="text-emerald-400">S</span>
                  <span className="text-cyan-400">R</span>
                </div>
              </div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Full Stack & Frontend Web Developer. Bridging engineering precision, financial-grade rigor, and modern JavaScript architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-2.5 sm:gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-green-500/30 text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-500/30 text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all cursor-pointer ml-1 sm:ml-2"
              title="Back to Top"
              type="button"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] sm:text-[11px]">
            Engineered with Next.js 16, React 19 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
