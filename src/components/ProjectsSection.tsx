import { motion } from "framer-motion";
import { ExternalLink, Brain, BarChart3, Briefcase, Hospital, Rocket, Code2, Calendar, MapPin } from "lucide-react";

const projects = [
  {
    title: "Continuous Multimodal Facial Authentication",
    period: "Sep 2025 - Apr 2026",
    context: "M.Sc. Research Project",
    icon: Brain,
    link: "https://github.com/likhith2001/Continuous-Multimodal-Facial-Authentication",
    skills: ["Python", "FastAPI", "React.js", "Machine Learning", "Computer Vision"],
    description:
      "As part of my M.Sc. research at Lakehead University, I developed a continuous multimodal facial authentication system to combat real-time session hijacking and deepfakes.\n\nKey Highlights:\n- Architected a Two-Stream Fusion 3D-CNN and MAML-based few-shot learning framework using dense optical flow, achieving state-of-the-art deepfake detection accuracies of 100% on GRID, 98.11% on FaceForensics++, and 96.63% on MOBIO datasets. \n- Engineered a real-time full-stack verification system with a FastAPI backend and responsive frontend dashboard, enabling continuous webcam authentication via 3-second sliding windows and rapid biometric user adaptation in under 5 seconds.",
  },
  {
    title: "Uber GSS Ad-Ops",
    period: "Jan 2024 – Aug 2024",
    context: "Nineleaps — Uber External Consultant",
    icon: BarChart3,
    link: "",
    skills: ["Python", "SQL", "Tableau", "Google Sheets", "JIRA", "uWorc", "QueryBuilder", "Databook", "Sourcegraph"],
    description:
      "Operating as a consultant for Uber via Nineleaps, I focused on streamlining the backend architecture for Ads optimization and global revenue tracking.\n\nKey Highlights:\n- Engineered complex SQL queries to process millions of rows of global revenue data, architecting high-performance dashboards that enabled real-time tracking of Ads metrics for stakeholders worldwide.\n- Managed end-to-end data pipeline automations and resolved critical system bugs, ensuring 100% uptime for business critical reporting tools during active maintenance and support phases.",
  },
  {
    title: "Uber GSS Rider Analytics",
    period: "Jul 2023 – Oct 2023",
    context: "Nineleaps — Uber External Consultant",
    icon: BarChart3,
    link: "",
    skills: ["Python", "SQL", "GCP", "Tableau", "Google Sheets", "uWorc", "QueryBuilder", "Databook"],
    description:
      "I contributed to the 'InSA Rides Ops Analytics' project at Uber, focusing on optimizing ride operations and managing ride arrears across India, Sri Lanka, and Bangladesh.\n\nKey Highlights:\n- Architected and deployed regional data automations for the InSA region, optimizing rider operations and reducing ride arrears through the delivery of high-accuracy revenue metrics.\n- Facilitated continuous system improvements by executing technical bug fixes and fulfilling ad-hoc data requests, directly supporting regional stakeholders in data-driven operational scaling.",
  },
  {
    title: "Jobtrix — Job Portal Application",
    period: "Nov 2022 - May 2023",
    context: "RNSIT - Academic Project",
    icon: Briefcase,
    link: "https://github.com/likhith2001/JOBTRIX-A-Job-Portal-Application",
    skills: ["Python", "MySQL", "XGBoost", "Flask", "HTML", "CSS", "JavaScript"],
    description:
      "Collaborated within a development team to build an AI-powered job recommendation platform designed to match users with highly relevant roles based on in-depth skillset analysis.\n\nKey Highlights:\n- Co-engineered the full-stack architecture, utilizing a Flask REST API backend to integrate a custom XGBoost machine learning model for accurate skillset matching.\n- Contributed to an automated data ingestion pipeline using Python Requests to scrape, clean continuously, and load live job postings into a MySQL database, ensuring real-time dataset accuracy.",
  },
  {
    title: "Care and Cure — Hospital Management",
    period: "Aug 2022 - Sep 2022",
    context: "TechieAid — Internship Project",
    icon: Hospital,
    link: "https://github.com/likhith2001/CareAndCure",
    skills: ["ASP.NET", "C#", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Co-developed Care and Cure, a comprehensive online hospital management system, within a two-person development team during my TechieAid Full Stack Internship.\n\nKey Highlights:\n- Co-engineered a scalable full-stack web application utilizing ASP.NET Core MVC (C#) and MySQL, facilitating a seamless online booking experience capable of handling 50+ doctors and 500+ patient appointments.\n- Collaborated to design and implement secure, role-based access portals (Admin, Doctor, Patient) and an intuitive frontend UI, which drove a 35% improvement in registration-to-appointment conversion rates compared to legacy manual systems.",
  },
  // {
  //   title: "Project Title — Coming Soon",
  //   period: "TBD",
  //   context: "Personal Project",
  //   icon: Code2,
  //   link: "https://github.com/likhith2001",
  //   skills: ["TBD"],
  //   description: "Sample project description. Update this with your actual project details and tech stack used.",
  // },
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
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
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
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
