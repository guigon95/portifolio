import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronRight, Terminal } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-mono mb-6">
            <Terminal size={14} />
            <span>Available for new challenges</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Guilherme <br />
            <span className="text-muted">Gonçalves</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-accent mb-8 font-mono">
            Software Engineer | Kotlin & Distributed Systems
          </h2>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Experiência na construção de sistemas distribuídos, com foco em 
            arquitetura limpa, microsserviços e soluções escaláveis na nuvem.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 cursor-pointer"
            >
              Ver Projetos <ChevronRight size={18} />
            </motion.button>
            
            <div className="flex gap-2">
              <a 
                href="https://www.linkedin.com/in/guilhermegon95/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/guigon95" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:placeholder@email.com" 
                className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-white/5">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEhkl5RRs34XQ/profile-displayphoto-shrink_200_200/B4DZbGf309GUAY-/0/1747086966860?e=1773273600&v=beta&t=NBQmHKkCyCiY2PByaLKwoUBkbpsdm69fHnPRcHi2oYI" 
                alt="Guilherme Gonçalves"
                className="w-full h-full object-cover greenscale hover:greenscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
