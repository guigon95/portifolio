import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Registro e Liquidação de Renda Fixa",
    category: "Infraestrutura de Mercado / B3",
    description: "Desenvolvimento e modernização de sistemas críticos para o mercado de capitais, focando em registro de ativos e liquidação financeira de alta performance com arquitetura resiliente.",
    tech: ["Java", "Spring Boot", "PL/SQL", "Redis", "Azure", "Kubernetes", "Kafka", "Clean Arch"],
    image: "https://picsum.photos/seed/stockmarket/800/600",
    link: "https://www.b3.com.br/pt_br/regulacao/estrutura-normativa/regulamentos-e-manuais/registro-e-liquidacao.htm"
  },
  {
    title: "Telemetria e Gestão de Frotas",
    category: "IoT / Logística / Trimble",
    description: "Sistema escalável para monitoramento de frotas em tempo real, processando grandes volumes de dados de telemetria para otimização logística e gestão de ativos.",
    tech: ["Kotlin", "Java", "Spring Boot", "Kafka", "AWS", "JUnit", "Microsserviços"],
    image: "https://picsum.photos/seed/trucks/800/600",
    link: "https://onps.com/en/solutions"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Projetos em Destaque</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-accent/30 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white text-black hover:bg-accent transition-colors flex items-center gap-2 font-bold"
                  >
                    Ver Projeto <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-xs font-mono text-accent mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-white/40 border border-white/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
