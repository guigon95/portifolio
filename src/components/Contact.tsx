import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "guilherme.gon@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Contato</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Vamos construir algo <span className="text-muted">incrível?</span></h3>
          
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, colaborações em projetos open-source ou apenas para um café técnico.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 p-2 pl-6 rounded-full bg-white/5 border border-white/10 w-full md:w-auto">
              <Mail size={20} className="text-muted" />
              <span className="font-mono text-sm">{email}</span>
              <button 
                onClick={copyEmail}
                className="p-3 rounded-full bg-white text-black hover:bg-accent transition-colors"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            <a 
              href="https://www.linkedin.com/in/guilhermegon95/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold"
            >
              LinkedIn <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
