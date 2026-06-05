import { motion } from "framer-motion";
import { ExternalLink, Brain, BarChart3, Briefcase, Hospital, Rocket, Code2, Calendar, MapPin } from "lucide-react";

const projects = [
  {
    title: "Uber GSS Ad-Ops",
    period: "Jan 2024 – Aug 2024",
    context: "Nineleaps - Uber External Consultant",
    icon: BarChart3,
    link: "",
    skills: ["Python", "SQL", "Tableau", "JIRA", "QueryBuilder", "uWorc"],
    description: "- Addressed global revenue tracking gaps and backend crashes affecting business-critical reporting.\n- Enhanced complex Python-SQL pipelines designed to handle massive global data volumes.\n- Resolved critical system bugs via JIRA to eliminate reporting tool latency.\n- Processed 100K+ daily records, ensuring 100% platform uptime for vital BI tools."
  },
  {
    title: "Uber GSS Rider Analytics",
    period: "Jul 2023 – Oct 2023",
    context: "Nineleaps - Uber External Consultant",
    icon: BarChart3,
    link: "",
    skills: ["Python", "SQL", "Tableau", "JIRA", "QueryBuilder", "uWorc"],
    description: "- Tackled regional inefficiencies in ride operations and arrears management across the InSA region.\n- Architected and deployed regional data automations to deliver high-accuracy revenue metrics.\n- Executed technical bug fixes to fulfill ad-hoc data requests for regional stakeholders.\n- Optimized rider operations and significantly reduced ride arrears to support scaling."
  },
  {
    title: "Deepfake-Resilient Authentication",
    period: "Sep 2025 - Apr 2026",
    context: "M.Sc. Research Project",
    icon: Brain,
    link: "https://github.com/likhith2001/Biometric-Incoherence-Detection-and-Meta-Learning-for-Deepfake-Resilient-Authentication",
    skills: ["PyTorch", "FastAPI", "React.js", "3D-CNNs", "MAML", "WebRTC"],
    description: "- Addressed system vulnerabilities to synthetic media threats and high latency verification bottlenecks.\n- Constructed a PyTorch 3D-CNN framework (MAML-based) to counter deepfake attacks.\n- Integrated a FastAPI backend utilizing WebRTC to optimize real-time processing speeds.\n- Achieved up to 100% biometric accuracy and reduced verification times to sub-5 seconds."
  },
  {
    title: "Jobtrix - AI-Powered Job Portal",
    period: "Nov 2022 - May 2023",
    context: "RNSIT - Academic Project",
    icon: Briefcase,
    link: "https://github.com/likhith2001/JOBTRIX-A-Job-Portal-Application",
    skills: ["Python", "Flask REST API", "MySQL", "XGBoost", "Requests"],
    description: "- Solved inaccurate job mismatching for students and manual data entry bottlenecks for job postings.\n- Programmed a Flask/XGBoost REST API to enable highly accurate skillset matching.\n- Automated a Python Requests web scraping pipeline to continuously ingest live job data.\n- Generated tailored ATS resumes for 500+ students and loaded 1,000+ postings with 95% precision."
  }
];

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Key projects I've built and contributed to</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {projects.map((project, i) => (
        <div
          key={i}
          className="glass-card p-5 hover-lift"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <project.icon size={18} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">{project.title}</h4>
            </div>
            <div className="flex items-center gap-3 sm:ml-auto">
              <span className="text-xs text-primary font-medium whitespace-nowrap flex items-center gap-1.5">
                <Calendar size={13} />
                {project.period}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  aria-label="View on GitHub"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3 sm:ml-12">
            <MapPin size={12} />
            {project.context}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-3 sm:ml-12">
            {project.skills.map((skill, si) => (
              <span
                key={si}
                className="inline-block text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {project.description && (
            <div className="text-muted-foreground text-sm leading-relaxed space-y-2 sm:ml-12">
              {project.description.split("\n\n").map((block, bi) => {
                const lines = block.split("\n");
                const bullets = lines.filter((l) => l.startsWith("- "));
                if (bullets.length > 0) {
                  const heading = lines.find((l) => !l.startsWith("- "));
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
  </section>
);

export default ProjectsSection;
