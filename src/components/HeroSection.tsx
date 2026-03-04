import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, FileText } from "lucide-react";
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
                  <img src={profileImg} alt="Likhith Varma" className="w-full h-full object-cover" />
                </div>
            </motion.div>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              I'm a 💻 Results-Driven Data Professional & Software Developer with nearly 2 years of experience. Specialising in architecting automated data infrastructure, engineering robust ETL pipelines (during my time consulting for Uber), and building state-of-the-art AI frameworks like MAML-based deepfake detection. Currently completing my M.Sc. in Computer Science at Lakehead University 🎓.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg">
              All things Tech: Data Engineering. Data Analytics. Software Development. Yep, I do them all. <br />Let's build data-driven solutions that are not just scalable but also impactful.
            </p>

            {/* Buttons + socials — desktop: inline row */}
            <div className="hidden lg:flex flex-wrap items-center gap-3 mb-8">
              <a
                href="/Likhith_Resume.pdf"
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
              <a href="https://www.instagram.com/likhith0102" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <Instagram size={24} />
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
              <a href="https://instagram.com/likhith0102" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center text-muted-foreground hover:text-primary transition-colors p-2">
                <Instagram size={28} />
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
              <img src={profileImg} alt="Likhith Varma" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
