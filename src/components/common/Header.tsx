import React from 'react';
import {
  Menu,
  Search,
  ExternalLink,
  Upload,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const {
    setSearchModalOpen,
    setUploadModalOpen,
    setMobileNavOpen,
    userProfile
  } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-surface-light/95 backdrop-blur-md border-b border-brand-border px-4 sm:px-6 py-2.5">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section: Mobile Menu & Portal Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden p-2 text-brand-dark hover:bg-brand-soft rounded-lg"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-brand-dark bg-brand-soft px-3 py-1.5 rounded-full border border-brand-primary/20">
            <GraduationCap size={15} />
            <span>GATE Prep Hub</span>
            <span className="text-slate-400 font-normal">|</span>
            <span className="font-normal text-slate-600">{userProfile.exam}</span>
          </div>

          <a
            href="https://gate2027.iitm.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open official GATE 2027 IIT Madras Examination Portal"
            className="flex items-center gap-1.5 text-xs font-medium text-brand-dark bg-white hover:bg-brand-soft px-3 py-1.5 rounded-full border border-brand-primary/40 transition-all shadow-sm group"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="hidden md:inline">Official Portal:</span>
            <span className="font-semibold underline decoration-dotted">GATE 2027 IIT Madras</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform text-brand-primary" />
          </a>
        </div>

        {/* Right Section: Search, Upload & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Bar */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 text-xs text-slate-500 bg-brand-light hover:bg-brand-primary/20 px-3 py-1.5 rounded-lg border border-brand-border transition-colors shadow-sm"
          >
            <Search size={14} className="text-brand-dark" />
            <span className="hidden lg:inline">Search study material, formulas, PYQs...</span>
            <span className="lg:hidden">Search...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-200 rounded text-slate-500">
              Ctrl+K
            </kbd>
          </button>

          {/* Upload Note Button */}
          <button
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium bg-brand-primary/20 text-brand-dark hover:bg-brand-primary/40 px-3 py-1.5 rounded-lg transition-colors border border-brand-primary/30"
          >
            <Upload size={14} />
            <span className="hidden sm:inline">Upload Notes</span>
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-brand-border">
            <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs font-bold ring-2 ring-brand-primary/30">
              {userProfile.name[0]}
            </div>
            <div className="hidden xl:block text-left leading-tight">
              <div className="text-xs font-semibold text-brand-dark">{userProfile.name}</div>
              <div className="text-[10px] text-slate-500">Aspirant</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
