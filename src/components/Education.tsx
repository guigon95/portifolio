import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Pós-graduação em Arquitetura de Software",
    institution: "FIAP",
    period: "2023 — 2024",
    description: "Especialização focada em padrões de projeto, sistemas distribuídos, escalabilidade e arquiteturas modernas."
  },
  {
    degree: "Engenharia da Computação",
    institution: "UTFPR - Universidade Tecnológica Federal do Paraná",
    period: "2014 — 2019",
    description: "Formação sólida em fundamentos de computação, algoritmos, sistemas operacionais e engenharia de software."
  },
  {
    degree: "Técnico em Informática",
    institution: "ETEC de Lins",
    period: "2012 — 2013",
    description: "Primeiro contato com desenvolvimento de software, lógica de programação e infraestrutura básica."
  }
];

export const Education = () => {
  return (
    <section className="section-padding bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Formação</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Educação Acadêmica</h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] flex gap-6 items-start"
            >
              <div className="p-3 rounded-2xl bg-accent/10 text-accent shrink-0">
                <GraduationCap size={24} />
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h4 className="text-xl font-bold">{item.degree}</h4>
                  <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-accent/80 mb-2 font-medium">{item.institution}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
