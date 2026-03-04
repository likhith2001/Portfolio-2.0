import { motion } from "framer-motion";
import { Code2, Database, Globe, Cloud } from "lucide-react";

const highlighted = ["Python", "SQL", "Tableau", "Google Sheets/Excel", "Google Cloud Platform (GCP)", "HTML", "CSS", "JavaScript"];

const categories = [
  { name: "Languages", icon: Code2, skills: ["C", "Java", "C#"] },
  { name: "Data & AI", icon: Database, skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "XGBoost", "MAML", "TensorFlow"] },
  { name: "Web Frameworks", icon: Globe, skills: ["React.js", "FastAPI", "Flask", "Node.js"] },
  { name: "Cloud / Tools", icon: Cloud, skills: ["AWS", "Looker Studio", "Git", "JIRA", "Linux", "Docker"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <h3 className="text-sm font-medium text-muted-foreground mb-5 uppercase tracking-wider">Core Skills</h3>
      <div className="flex flex-wrap gap-3">
        {highlighted.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary text-sm font-semibold border border-primary/20 shadow-sm shadow-primary/5 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="glass-card p-6 hover-lift"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <cat.icon size={18} className="text-primary" />
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm">{cat.name}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
