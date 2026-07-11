import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

const education = [
  { year: "2024 – 2026", title: "Master of Science, Computer Science", place: "Lakehead University, Thunder Bay", detail: "94.333% CGPA", description: "" },
  { year: "2019 – 2023", title: "Bachelor of Engineering, Computer Science", place: "RNS Institute of Technology, Bangalore", detail: "9.06 CGPA", description: "" },
  { year: "2017 – 2019", title: "Intermediate – Maths, Physics, Chemistry", place: "Sri Chaitanya Junior College, Tirupati", detail: "9.86 CGPA", description: "" },
  { year: "2017", title: "Secondary School Education", place: "Indian Public School, Tirupati", detail: "10 GPA", description: "" },
];

const experience = [
  {
    period: "May 2026 – Present",
    title: "Data Analytics Engineer",
    place: "Belluz Concrete & Rentals (Northwestern Ontario Innovation Center, Thunder Bay, ON)",
    description: "- Spearheaded end-to-end Python-PostgreSQL pipeline development to overcome severe real-time data extraction delays.\n- Automated 100% of data ingestion workflows leveraging APIs and Excel to streamline business intelligence operations.\n- Formulated comprehensive Power BI dashboards featuring daily refresh mechanisms to track and visualize core KPIs.\n- Boosted executive decision-making efficiency by 30% through the delivery of automated summary reports."
  },
  {
    period: "Jun 2025 – Aug 2025",
    title: "Graduate Assistant",
    place: "Lakehead University, Thunder Bay, ON",
    description: "- Bridged critical student knowledge gaps in complex cloud architectures and machine learning concepts.\n- Organized targeted consultations for 50+ students, providing rapid debugging support to overcome technical roadblocks.\n- Administered technical assessments while delivering timely, constructive feedback on complex coding projects.\n- Improved overall class performance and learning outcomes by 30% via proactive academic mentoring."
  },
  {
    period: "Jul 2023 – Aug 2024",
    title: "Data Engineer & Analyst",
    place: "Uber Technologies Inc. (via Nineleaps Technology Solutions), Bangalore, India",
    description: "- Eliminated global analytical lag by architecting 10+ scalable ETL pipelines using Python, MySQL, and GCP.\n- Engineered high-performance backend SQL queries to seamlessly process millions of rows and update 100K+ daily records.\n- Troubleshot and resolved critical system bugs via JIRA to prevent data bottlenecks and guarantee 100% reporting uptime.\n- Achieved >98% real-time data accuracy, driving a 20% surge in overall global reporting efficiency."
  },
  {
    period: "Feb 2023 – Jul 2023",
    title: "Data Engineering Intern",
    place: "Nineleaps Technology Solutions, Bangalore, India",
    description: "- Tackled large-scale data fragmentation by optimizing analytical workflows across Hadoop and BigQuery environments.\n- Managed and analyzed complex enterprise datasets efficiently by leveraging Google Cloud Storage architecture.\n- Deployed scalable applications via Google App Engine to eradicate underlying infrastructure bottlenecks.\n- Designed interactive Looker Studio dashboards to successfully present actionable, data-driven business insights."
  },
  {
    period: "Jul 2022 – Sep 2022",
    title: "Full Stack Developer",
    place: "TechieAid, India",
    description: "- Modernized and streamlined legacy MySQL database systems to resolve backend inefficiencies and enhance overall application performance.\n- Applied advanced database design concepts, meticulously utilizing Entity-Relationship Diagram (ERD) modeling to restructure data architecture.\n- Implemented Third Normal Form (3NF) principles to eliminate data redundancy and ensure strict data integrity across the platform.\n- Successfully engineered backend optimizations that directly enabled and supported stable booking capabilities for over 500 users."
  },
  {
    period: "Jun 2021 – Aug 2021",
    title: "Machine Learning Specialist",
    place: "Knowledge Solutions India, India",
    description: "- Spearheaded the design and development of predictive machine learning models to anticipate and map out shifting business trends.\n- Identified and resolved critical analytical bottlenecks that were previously hindering the organization's data pipelines.\n- Engineered robust trend-forecasting solutions that successfully achieved a highly reliable 87% accuracy rate.\n- Transformed complex business data into actionable foresight, enabling the team to make proactive, data-driven decisions."
  },
];

type Tab = "education" | "experience";

const CareerSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <section id="career" className="section-container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="section-title">Career</h2>
        <p className="section-subtitle">Education & Professional Experience</p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("education")}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === "education"
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
        >
          <GraduationCap size={16} />
          Education
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === "experience"
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
        >
          <Briefcase size={16} />
          Experience
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "education" && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center"
          >
            <div className="relative max-w-lg w-full">
              {/* Timeline connector line between cards */}
              {education.length > 1 && (
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent -translate-x-1/2 pointer-events-none" />
              )}

              {education.map((item, i) => (
                <div
                  key={i}
                  className="relative pb-6 last:pb-0"
                >
                  {/* Connector dot — sits between cards, not on them */}
                  {i < education.length - 1 && (
                    <div className="absolute left-1/2 -bottom-1 w-2 h-2 rounded-full bg-primary/40 -translate-x-1/2 z-10" />
                  )}

                  <div className="glass-card p-5 hover-lift relative z-20">
                    <div className="flex items-center gap-2 text-primary text-xs font-medium mb-2">
                      <Calendar size={13} />
                      {item.year}
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                      <MapPin size={12} />
                      {item.place}
                    </div>
                    <span className="inline-block text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                      {item.detail}
                    </span>
                    {item.description && (
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            {experience.map((item, i) => (
              <div key={i} className="glass-card p-5 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <span className="text-xs text-primary font-medium whitespace-nowrap flex items-center gap-1.5">
                    <Calendar size={13} />
                    {item.period}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                  <MapPin size={12} />
                  {item.place}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    {item.description.split("\n\n").map((block, bi) => {
                      const lines = block.split("\n");
                      const bullets = lines.filter(l => l.startsWith("- "));
                      if (bullets.length > 0) {
                        const heading = lines.find(l => !l.startsWith("- "));
                        return (
                          <div key={bi}>
                            {heading && <p className="font-medium text-foreground mb-1">{heading}</p>}
                            <ul className="list-disc list-inside space-y-1">
                              {bullets.map((b, li) => (
                                <li key={li}>{b.replace(/^- /, "")}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return <p key={bi}>{block}</p>;
                    })}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareerSection;
