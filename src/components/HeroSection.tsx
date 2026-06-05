import { motion } from "framer-motion";
import { Linkedin, Github, Mail, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-2 text-sm tracking-wider uppercase">
              Data Engineer · Analyst · Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Hello,
              <br />
              <span className="text-primary">Likhith here!</span>{" "}
              <span className="inline-block text-4xl sm:text-5xl lg:text-6xl animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
            </h1>

            {/* Profile image — shown here on mobile/tablet, hidden on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center mb-8 md:hidden"
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-primary/20 relative z-20 isolate">
                <img src={profileImg} alt="Likhith Varma" className="w-full h-full object-cover" width={288} height={288} loading="eager" />
              </div>
            </motion.div>

            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
              I'm a Results-Driven Data Professional with an M.Sc. in Computer Science. I leverage data modeling expertise to build scalable ETL pipelines and cutting-edge machine learning frameworks.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">
              My experience spans from building automated data infrastructure at Uber (processing 100K+ daily records) to driving operational efficiency at Belluz Concrete & Rentals. I specialize in Python, Advanced SQL, and BI to transform complex datasets into strategic insights.
            </p>

            <div className="flex flex-col gap-2 mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10 w-fit">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <span className="text-sm font-semibold text-foreground">M.Sc. Computer Science (94.33% CGPA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🥇</span>
                <span className="text-sm font-medium text-muted-foreground">Governor-General's Gold Medal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <span className="text-sm font-medium text-muted-foreground">Dean's Scholar Award</span>
              </div>
            </div>

            {/* Buttons + socials — desktop: inline row */}
            <div className="hidden lg:flex flex-wrap items-center gap-3 mb-8">
              <a
                href="/Resume_Likhith.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <FileText size={16} />
                Resume
              </a>
              <a
                href="mailto:likhith2001@gmail.com"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/10 transition-colors"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://linkedin.com/in/likhith-varma-2001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/likhith2001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Github size={24} />
              </a>
            </div>

            {/* Buttons + socials — mobile/tablet: grid aligned */}
            <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden max-w-xs">
              <a
                href="/Likhith_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <FileText size={16} />
                Resume
              </a>
              <a
                href="mailto:likhith2001@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary px-4 py-3 rounded-lg font-medium text-sm hover:bg-primary/10 transition-colors"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://linkedin.com/in/likhith-varma-2001" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center text-muted-foreground hover:text-primary transition-colors p-2">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/likhith2001" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center text-muted-foreground hover:text-primary transition-colors p-2">
                <Github size={28} />
              </a>
            </div>
          </motion.div>

          {/* Profile image — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="w-80 lg:w-96 rounded-2xl overflow-hidden border-2 border-primary/20">
              <img src={profileImg} alt="Likhith Varma" className="w-full h-auto object-cover" width={384} height={384} loading="eager" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
