import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-black font-bold">G</div>
          <span className="font-bold tracking-tight">Guilherme Gonçalves</span>
        </div>
        
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} — Built with React & Tailwind
        </p>

        <div className="flex gap-6 text-sm text-muted font-mono">
          <a href="https://github.com/guigon95" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/guilhermegon95/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
