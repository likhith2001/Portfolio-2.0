import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

const education = [
  { year: "2024 – 2026", title: "Master of Science, Computer Science", place: "Lakehead University, Thunder Bay", detail: "93.16% CGPA", description: "" },
  { year: "2019 – 2023", title: "Bachelor of Engineering, Computer Science", place: "RNS Institute of Technology, Bangalore", detail: "9.06 CGPA", description: "" },
  { year: "2017 – 2019", title: "Intermediate – Maths, Physics, Chemistry", place: "Sri Chaitanya Junior College, Tirupati", detail: "9.86 CGPA", description: "" },
  { year: "2017", title: "Secondary School Education", place: "Indian Public School, Tirupati", detail: "10 GPA", description: "" },
];

const experience = [
  { period: "Jul 2025 – Aug 2025", title: "Teaching Assistant", place: "Lakehead University, Thunder Bay", description: "As a Teaching Assistant for the course \"Cloud Computing for AI and ML,\" I supported the academic and operational needs of the Computer Science department by bridging complex theoretical concepts with practical cloud applications.\n\nKey Responsibilities:\n- Handled technical tests and assessments, including assisting with invigilating and grading quizzes and examinations focused on cloud architectures and machine learning pipelines.\n- Provided timely, constructive feedback and grades on complex coding projects.\n- Organized office hours and conducted student consultations to address technical roadblocks, clarify cloud/ML concepts, and improve overall learning outcomes.\n\nMy role helped me further enhance my technical and academic communication skills while actively supporting student success in advanced, industry-relevant computer science fields." },
  { period: "Jul 2023 – Aug 2024", title: "Data Analyst | UBER External Consultant", place: "Nineleaps, Bangalore", description: "As an External Consultant for Uber, I operated at the intersection of data engineering and analytics. I architected automated data pipelines, optimized backend queries, and deployed high-performance dashboards that drove strategic, data-driven decisions on a global scale.\n\nKey Achievements:\n- Architected and maintained 10+ automated ETL pipelines using Python, MySQL, and GCP, achieving >98% real-time data accuracy for global business reporting workflows.\n- Engineered high-performance backend queries to handle and update 100K+ daily records, driving a 20% increase in overall process efficiency.\n\nMajor Uber Projects:\n- Uber GSS Ads-Ops: Engineered complex SQL queries to process millions of rows of global revenue data. Managed end-to-end data pipeline automations and resolved critical system bugs via JIRA, ensuring 100% uptime for business-critical reporting tools during active maintenance phases.\n- Uber GSS Rider Analytics: Architected and deployed regional data automations for the InSA region (India, Sri Lanka, Bangladesh) to optimize rider operations and reduce ride arrears. Facilitated continuous system improvements by executing technical bug fixes and fulfilling ad-hoc data requests to support regional operational scaling." },
  { period: "Feb 2023 – Jul 2023", title: "Data Engineering Intern", place: "Nineleaps, Bangalore", description: "As a Data Engineering Intern, I built a strong foundation in cloud-based data architecture and large-scale data processing. I utilized the Google Cloud Platform (GCP) ecosystem and big data tools to design, process, and visualize complex datasets across multiple enterprise projects.\n\nKey Achievements:\n- Engineered and optimized data workflows utilizing Hadoop, BigQuery, and Google Cloud Storage to efficiently manage and analyze large-scale data sets.\n- Leveraged Google App Engine for scalable application deployment while architecting interactive KPI dashboards in Looker Studio to deliver actionable business insights." },
  { period: "Aug 2022 – Sep 2022", title: "Full Stack Developer Intern", place: "TechieAid, Bangalore", description: "As a Full Stack Developer Intern, I engineered \"Care and Cure,\" a comprehensive online hospital management system designed to modernize patient booking workflows and streamline healthcare accessibility.\n\nKey Achievements:\n- Developed a robust full-stack application utilizing ASP.NET Core MVC and MySQL, facilitating a seamless online booking experience capable of handling 50+ doctors and 500+ patient appointments.\n- Implemented secure user authentication protocols and an intuitive frontend booking UI, driving a 35% improvement in registration-to-appointment conversion rates compared to legacy manual systems." },
  { period: "Jun 2021 – Aug 2021", title: "ML-AI Intern", place: "Knowledge Solutions India, Pune", description: "As an ML/AI Intern, I gained hands-on experience in building and evaluating predictive machine learning models using Python. I focused on transforming raw datasets into accurate, actionable classification and clustering models for both the education and healthcare sectors.\n\nKey Achievements:\n- Designed and implemented a K-Means Clustering model to analyze performance metrics from over 1,000 colleges, successfully predicting graduation trends with an 87% accuracy rate.\n- Developed and evaluated a heart disease prediction model using Logistic Regression, classifying patient health risks across diverse datasets with 89% classification accuracy." },
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
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "education"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <GraduationCap size={16} />
          Education
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "experience"
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
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
                </motion.div>
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
