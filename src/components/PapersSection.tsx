import { motion } from "framer-motion";
import { FileText, CalendarDays, ArrowUpRight } from "lucide-react";

const papers = [
  { title: "Revolutionizing Job Searches", date: "Apr 2023" },
  { title: "An Insight into Cloud Computing", date: "Dec 2020" },
  { title: "The Era of Network Security — Survey Paper", date: "" },
];

const PapersSection = () => (
  <section id="papers" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Paper Presentations</h2>
      <p className="section-subtitle">Research and academic contributions</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {papers.map((paper, i) => (
        <div
          key={i}
          className="glass-card p-6 hover-lift group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <FileText size={22} className="text-primary" />
          </div>
          <h4 className="font-display font-semibold text-foreground text-sm mb-3 leading-snug">{paper.title}</h4>
          {paper.date && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays size={12} />
              {paper.date}
            </div>
          )}
          <ArrowUpRight size={14} className="absolute top-4 right-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
        </div>
      ))}
    </motion.div>
  </section>
);

export default PapersSection;
