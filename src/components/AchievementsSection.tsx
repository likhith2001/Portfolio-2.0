import { motion } from "framer-motion";
import { Trophy, Target, Keyboard, Brain, Medal } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const achievements: { text: string; icon: LucideIcon }[] = [
  { text: "IELTS Band 7.5 (Dec 2025)", icon: Trophy },
  { text: "Cocubes Score — 658", icon: Target },
  { text: "3rd Place in 'Typeracing' Competition", icon: Keyboard },
  { text: "ELITE Rank — NPTEL Machine Learning", icon: Brain },
  { text: "2nd Place — GDSC Typing Contest", icon: Medal },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Achievements</h2>
      <p className="section-subtitle">Awards and recognitions</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {achievements.map((item, i) => (
        <div
          key={i}
          className="glass-card p-6 flex flex-col items-center text-center gap-3 hover-lift"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <item.icon size={22} className="text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground leading-snug">{item.text}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default AchievementsSection;
