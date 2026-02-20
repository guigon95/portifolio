import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Sobre Mim</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Engenheiro de Software focado em <span className="text-muted">Sistemas Distribuídos & Alta Disponibilidade.</span></h3>
          
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Sou um engenheiro de software com mais de 7 anos de experiência no desenvolvimento, teste e manutenção de aplicações web e microsserviços em nuvem utilizando <strong>Java, Kotlin e Spring Boot</strong>.
            </p>
            <p>
              Atualmente, trabalho no <strong>Itaú Unibanco</strong>, desenvolvendo soluções escaláveis e inovadoras para o segmento de cartões. Anteriormente, atuei por mais de 5 anos na <strong>B3</strong>, contribuindo para o desenvolvimento de sistemas críticos para o mercado de capitais.
            </p>
            <p>
              Graduado em Engenharia de Computação pela <strong>UTFPR</strong> e pós-graduado em Arquitetura de Software pela <strong>FIAP</strong>, onde aprimorei meus conhecimentos em design patterns, testes e melhores práticas arquiteturais. Meu foco é criar soluções seguras que atendam às necessidades reais do negócio.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">7+</div>
                <div className="text-xs font-mono uppercase tracking-tighter text-muted">Anos de Experiência</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">B3/Itaú</div>
                <div className="text-xs font-mono uppercase tracking-tighter text-muted">Empresas Tier 1</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">Cloud</div>
                <div className="text-xs font-mono uppercase tracking-tighter text-muted">AWS & Azure</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">Backend</div>
                <div className="text-xs font-mono uppercase tracking-tighter text-muted">Kotlin & Java</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
