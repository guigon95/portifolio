import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cloud, Database, ShieldCheck, MessageSquare } from 'lucide-react';

const stack = [
  {
    category: "Backend",
    icon: <Code2 className="text-accent" />,
    skills: ["Kotlin", "Java", "Spring Boot", "Microsserviços", "APIs REST"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-accent" />,
    skills: ["AWS", "CI/CD", "Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Mensageria",
    icon: <MessageSquare className="text-accent" />,
    skills: ["Kafka", "RabbitMQ", "Event-Driven Design"]
  },
  {
    category: "Banco de Dados",
    icon: <Database className="text-accent" />,
    skills: ["PostgreSQL", "MySQL", "Oracle (PL/SQL)", "DynamoDB", "Redis"]
  },
  {
    category: "Arquitetura & Qualidade",
    icon: <ShieldCheck className="text-accent" />,
    skills: ["Clean Architecture", "Clean Code", "TDD", "Unit/Integration Testing", "Resilience Patterns"]
  }
];

export const TechStack = () => {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Stack Técnica</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Ferramentas & Tecnologias</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-accent/30 transition-colors group"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.category}</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 text-sm text-muted border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
