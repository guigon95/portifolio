import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: "Engenheiro de Software",
    company: "Itaú Unibanco",
    period: "Mai 2025 — Presente",
    description: "Atuação na criação da nova plataforma de crédito do banco, desenvolvendo serviços de oferta de cartões modernos, escaláveis e resilientes, utilizando as melhores práticas de engenharia de software.",
    highlights: ["Plataforma de Crédito", "Oferta de Cartões", "Escalabilidade"]
  },
  {
    role: "Engenheiro de Software",
    company: "Platform Science",
    period: "Fev 2025 — Mai 2025",
    description: "Atuação no setor de transportes após a aquisição da divisão da Trimble. Foco na integração e evolução de sistemas de telemetria e gestão de frotas.",
    highlights: ["Telemetria", "Integração de Sistemas", "IoT"]
  },
  {
    role: "Engenheiro de Software",
    company: "Trimble",
    period: "Fev 2024 — Fev 2025",
    description: "Desenvolvimento de soluções para o setor de transportes e logística. Trabalho com ingestão de dados em tempo real e monitoramento avançado de frotas.",
    highlights: ["Logística", "Dados em Tempo Real", "AWS"]
  },
  {
    role: "Engenheiro de Software Pleno",
    company: "B3 - Brasil, Bolsa, Balcão",
    period: "Ago 2021 — Fev 2024",
    description: "Atuei na modernização da plataforma de liquidação financeira de renda fixa (CDB, CRI, CRA, LCI, LCA, Debêntures, etc). Desenvolvi novas funcionalidades, realizei manutenção, deploy e suporte de serviços em arquiteturas monolíticas e de microsserviços. Participei do programa CodeWith da Microsoft, contribuindo para a modernização de sistemas legados e migração para aplicações nativas em Azure.",
    highlights: ["Azure CodeWith", "Sistemas de Liquidação", "Modernização Cloud"]
  },
  {
    role: "Engenheiro de Software Júnior",
    company: "B3 - Brasil, Bolsa, Balcão",
    period: "Ago 2019 — Ago 2021",
    description: "Atuação no registro de ativos de renda fixa, depositária e conciliação. Iniciei a atuação na plataforma de liquidação financeira, criando novas funcionalidades, realizando manutenção e atendendo chamados críticos em produção (N3).",
    highlights: ["Suporte N3", "Liquidação Financeira", "Qualidade de Código"]
  },
  {
    role: "Estagiário de Engenharia de Software",
    company: "B3 - Brasil, Bolsa, Balcão",
    period: "Ago 2018 — Ago 2019",
    description: "Auxílio no desenvolvimento e manutenção de sistemas para registro de ativos de renda fixa, depositária e conciliação, utilizando PL/SQL e Java.",
    highlights: ["Renda Fixa", "Depositária", "PL/SQL"]
  },
  {
    role: "Estagiário Técnico",
    company: "Empresa de Tecnologia",
    period: "Jul 2013 — Ago 2013",
    description: "Estágio focado no aprimoramento de habilidades em desenvolvimento e manutenção de softwares e websites, integrando-os a um sistema ERP existente. Utilizei Delphi, PHP, Bootstrap e PostgreSQL.",
    highlights: ["Delphi", "PHP", "Integração ERP"]
  }
];

export const Experience = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Trajetória</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Experiência Profissional</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-2xl font-bold">{exp.role}</h4>
                  <h5 className="text-lg text-accent font-medium mb-1">{exp.company}</h5>
                </div>
                <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full w-fit shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted mb-6 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {exp.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-white/80">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
