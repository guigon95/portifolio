import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Liquidação Financeira",
    category: "Fintech / Backend",
    description: "Motor de liquidação de alta performance processando milhões de transações diárias com consistência eventual e garantias de ACID.",
    tech: ["Kotlin", "Spring Boot", "Kafka", "PostgreSQL", "Redis"],
    image: "https://picsum.photos/seed/finance/800/600"
  },
  {
    title: "Plataforma de Recomendação",
    category: "E-commerce / AI",
    description: "Arquitetura de microsserviços para recomendação em tempo real baseada em comportamento do usuário e telemetria.",
    tech: ["Java", "AWS Lambda", "DynamoDB", "Python", "SQS"],
    image: "https://picsum.photos/seed/recomm/800/600"
  },
  {
    title: "Telemetria de Frotas",
    category: "IoT / Logistics",
    description: "Sistema de ingestão de dados em tempo real para monitoramento de frotas, utilizando padrões de resiliência para lidar com picos de carga.",
    tech: ["Kotlin", "AWS IoT", "TimescaleDB", "Kafka", "Docker"],
    image: "https://picsum.photos/seed/fleet/800/600"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-white text-black hover:bg-accent transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-white text-black hover:bg-accent transition-colors">
                    <Github size={20} />
                  </button>
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
