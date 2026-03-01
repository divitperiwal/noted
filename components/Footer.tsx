"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="white"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="white"/>
            </svg>
          </div>
          <span className="font-bold uppercase tracking-wider text-white">Noted</span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2025 Crimson Protocol. All Rights Reserved.</p>

        {/* Social Links */}
        <div className="flex gap-6">
          <Link href="https://www.linkedin.com/in/divitperiwal/" className="text-slate-500 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </Link>
          <Link href="https://github.com/divitperiwal/" className="text-slate-500 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </Link>
          <Link href="https://www.instagram.com/divit_periwal/?" className="text-slate-500 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
