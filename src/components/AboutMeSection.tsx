import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lightbulb, User, Database, Globe, Server, Code2, Cpu } from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Tab = "cocurricular" | "interests" | "personal";

const coCurricular = [
  { title: "Volunteering — Covid Helpdesk", description: "Coordinated relief efforts and assisted in managing helpdesk operations during the pandemic." },
  { title: "AICTE: Swachh Bharat, Tourism & Covid Awareness", description: "Participated in national awareness campaigns organized by AICTE to promote cleanliness, tourism, and Covid safety." },
  { title: "Hackathons: Flipkart GRiD, HackX by Scaler", description: "Competed in national-level hackathons, solving real-world challenges with innovative tech solutions." },
  { title: "Web Designing Competitions", description: "Participated in inter-college web design competitions showcasing front-end development skills." },
];

const interests: { name: string; icon: LucideIcon }[] = [
  { name: "Data Science", icon: Database },
  { name: "Full Stack Development", icon: Globe },
  { name: "DBMS", icon: Server },
  { name: "Data Structures & Algorithms", icon: Code2 },
  { name: "Operating Systems", icon: Cpu },
];

const personalDetails = [
  { label: "Name", value: "Likhith Varma" },
  { label: "Gender", value: "Male" },
  { label: "Date of Birth", value: "1st February 2001" },
  { label: "Nationality", value: "Indian" },
  { label: "Hobbies", value: "Cricket, Badminton, Dancing, Movies" },
  { label: "Languages", value: "English (IELTS - Band 7.5/CLB 9), Telugu, Hindi, Kannada, French (Learning)" },
];

const tabs: { key: Tab; label: string; icon: LucideIcon }[] = [
  { key: "cocurricular", label: "Co-Curricular", icon: Heart },
  { key: "interests", label: "Interests", icon: Lightbulb },
  { key: "personal", label: "Personal", icon: User },
];

const AboutMeSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("interests");

  return (
    <section id="about" className="section-container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="section-title">More About Me</h2>
        <p className="section-subtitle">Beyond the code</p>
      </motion.div>

      <div className="flex gap-2 mb-10 flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "cocurricular" && (
          <motion.div
            key="cocurricular"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {coCurricular.map((item, i) => (
              <div key={i} className="glass-card p-5 hover-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={16} className="text-primary shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-6">{item.description}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "interests" && (
          <motion.div
            key="interests"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {interests.map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 flex flex-col items-center text-center gap-4 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={26} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "personal" && (
          <motion.div
            key="personal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Personal Details</h3>
              </div>
              <dl className="space-y-4">
                {personalDetails.map((item) => (
                  <div key={item.label} className="flex items-start border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <dt className="text-muted-foreground text-sm w-32 shrink-0 font-medium">{item.label}</dt>
                    <dd className="text-foreground text-sm">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMeSection;
