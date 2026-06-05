import { motion } from "framer-motion";
import { Database, LineChart, BrainCircuit, Wrench } from "lucide-react";

const skillCategories = [
  {
    name: "Data Engineering & Architecture",
    icon: Database,
    badges: [
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      "https://img.shields.io/badge/PySpark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white",
      "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/Google_BigQuery-669DF6?style=for-the-badge&logo=googlebigquery&logoColor=white",
      "https://img.shields.io/badge/ETL_Pipelines-FF6F00?style=for-the-badge&logo=databricks&logoColor=white",
    ],
  },
  {
    name: "Data Analysis & Visualization",
    icon: LineChart,
    badges: [
      "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white",
      "https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black",
      "https://img.shields.io/badge/Looker_Studio-4285F4?style=for-the-badge&logo=looker&logoColor=white",
      "https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white",
      "https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white",
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: BrainCircuit,
    badges: [
      "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
      "https://img.shields.io/badge/XGBoost-189FDD?style=for-the-badge&logo=xgboost&logoColor=white",
      "https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white",
      "https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
      "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
      "https://img.shields.io/badge/3D--CNNs-FF6F00?style=for-the-badge&logo=pytorch&logoColor=white",
      "https://img.shields.io/badge/MAML-8A2BE2?style=for-the-badge&logo=pytorch&logoColor=white",
    ],
  },
  {
    name: "Tools & Web Frameworks",
    icon: Wrench,
    badges: [
      "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white",
      "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white",
      "https://img.shields.io/badge/Azure_Databricks-0089D6?style=for-the-badge&logo=microsoftazure&logoColor=white",
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white",
      "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
      "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      "https://img.shields.io/badge/REST_APIs-005C84?style=for-the-badge&logo=postman&logoColor=white",
      "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">The arsenal I use to build scalable data solutions</p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-6">
      {skillCategories.map((cat, index) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <cat.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg">{cat.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.badges.map((badgeUrl) => (
              <img 
                key={badgeUrl} 
                src={badgeUrl} 
                alt="Skill Badge" 
                className="h-7 md:h-8 hover-lift"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
