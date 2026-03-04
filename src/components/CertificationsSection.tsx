import { motion } from "framer-motion";
import { BarChart3, Brain, Code2, Database, Zap, Layout, LineChart, type LucideIcon } from "lucide-react";

const certifications: { name: string; icon: LucideIcon }[] = [
  { name: "2023-24 Tableau Desktop/Online/Prep Certification — Udemy", icon: BarChart3 },
  { name: "Introduction to Machine Learning by IIT Kharagpur — NPTEL", icon: Brain },
  { name: "Python 3.4.3 — IIT Bombay", icon: Code2 },
  { name: "Introductory C Programming by Duke University (Specialization) — Coursera", icon: Code2 },
  { name: "Mastering Data Structures and Algorithms Using C and C++ — Coursera", icon: Database },
  { name: "Apache Spark 3 - Spark Programming in Python for Beginners — Udemy", icon: Zap },
  { name: "Programming for Everybody (Getting Started with Python) from University of Michigan — Coursera", icon: Code2 },
  { name: "HTML, CSS and Javascript for Web Developers by John Hopkins University — Coursera", icon: Layout },
  { name: "Machine Learning using Linear Regression from FutureSkills Prime — NASSCOM", icon: LineChart },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">Professional courses and certifications</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid sm:grid-cols-2 gap-4"
    >
      {certifications.map((cert, i) => (
        <div
          key={i}
          className="glass-card flex items-center gap-4 p-4 group hover-lift"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
            <cert.icon size={18} className="text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">{cert.name}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default CertificationsSection;
