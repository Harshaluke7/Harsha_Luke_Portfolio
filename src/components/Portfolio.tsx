import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone, MapPin, ExternalLink, Award, GraduationCap, Code2, BrainCircuit, Terminal } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tighter uppercase"
        >
          portfolio<span className="text-brand-accent">.</span>
        </motion.div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-white/60">
          {['Home', 'Projects', 'Skills', 'About'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#ffffff', y: -1 }}
              className="hover:text-white transition-all tracking-wide"
            >
              {item}
            </motion.a>
          ))}
          <a href="#contact" className="text-white hover:text-brand-accent transition-colors ml-4 uppercase text-[11px] tracking-widest font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div id="about" className="absolute top-0 left-0 w-full h-px pointer-events-none" />
      <div className="absolute inset-0 glow-bg opacity-100 pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-brand-accent font-bold text-[11px] tracking-[0.3em] uppercase mb-8"
          >
            Pioneering AI Achievements
          </motion.div>
          
          <h1 className="text-5xl md:text-[90px] font-bold tracking-tighter mb-10 leading-[0.9] text-white uppercase">
            HARSHA LUKE <br /> 
            <span className="text-white/40">
              CHOWDARY CHERUKURI
            </span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="max-w-xl text-lg text-white/60 leading-relaxed font-normal">
              Exploring my portfolio showcasing AI and Machine Learning projects, 
              academic achievements, and specialized services offered. 
              Focused on meaningful, real-world impact through technology.
            </p>
            
            <div className="flex flex-col md:items-end gap-6">
              <a href="#projects" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-md font-bold text-sm hover:bg-brand-accent hover:text-white transition-all uppercase tracking-tight">
                View Portfolio
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-6">
                {[
                  { icon: Github, url: "https://github.com/harsha-luke" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/harsha-luke" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white/40 hover:text-white transition-all hover:-translate-y-1"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any; key?: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6"
  >
    <div className="flex items-center gap-3 mb-4 text-brand-accent">
      <Icon size={20} />
      <h3 className="font-mono text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white/80 font-bold uppercase tracking-widest">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  const categories = [
    { title: "Technical", icon: Code2, skills: ["Python", "HTML", "CSS", "JavaScript", "Bootstrap", "Express.js", "Node.js", "C", "Java (OOPS)"] },
    { title: "Machine Learning", icon: BrainCircuit, skills: ["Supervised", "Unsupervised", "Feature Engineering", "KMeans", "PCA"] },
    { title: "Deep Learning", icon: BrainCircuit, skills: ["CNNs", "RNNs", "GRU"] },
    { title: "Tools & Frameworks", icon: Terminal, skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "Streamlit", "Git", "Google Colab", "VsCode"] },
    { title: "Databases", icon: Terminal, skills: ["SQLite", "MySQL"] }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-brand-accent">01.</span> Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCategory key={i} title={cat.title} skills={cat.skills} icon={cat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Face Spoofing Detection",
      org: "Manav Rachna University",
      period: "01/2025 – 04/2025",
      description: "Realtime detection of spoofed faces to enhance biometric security systems.",
      tools: ["OpenCV", "Streamlit", "Python"],
      icon: Terminal
    },
    {
      title: "Knee Osteoporosis Detection",
      org: "Manav Rachna University",
      period: "08/2025 – 12/2025",
      description: "Automated detection of reduced bone density using deep learning architectures.",
      tools: ["EfficientNet B0", "Streamlit", "Deep Learning"],
      icon: BrainCircuit
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-brand-text">
          <span className="font-mono text-brand-accent">02.</span> Projects & Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="glass-card flex flex-col group p-8"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                   <project.icon size={24} />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight text-brand-text leading-tight">{project.title}</h3>
                    <p className="text-sm text-brand-accent font-mono">{project.org}</p>
                  </div>
                  <p className="text-xs text-brand-muted font-mono">{project.period}</p>
                </div>
                <p className="text-white/50 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 border border-white/5 text-brand-accent rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Education = () => {
  const steps = [
    { title: "B.Tech in CSE [AI & ML]", institution: "Manav Rachna University", detail: "CGPA: 8.6/10", period: "2023 – Present" },
    { title: "Intermediate (12th)", institution: "Amaravathi Junior College", detail: "Percentage: 94.6%", period: "2021 – 2023" },
    { title: "Secondary Education (10th)", institution: "Viswabharati High School", detail: "Percentage: 100%", period: "2021" }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-brand-accent">03.</span> Education
        </h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-6 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-accent/30 flex items-center justify-center shrink-0 shadow-lg">
                  <GraduationCap size={18} className="text-brand-accent" />
                </div>
                {i !== steps.length - 1 && <div className="w-px h-full bg-brand-muted/20 my-2" />}
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold tracking-tight text-white leading-tight">{step.title}</h3>
                <p className="text-white/40 mb-2">{step.institution}</p>
                <div className="flex gap-4 items-center font-mono text-sm">
                  <span className="text-brand-accent font-semibold">{step.detail}</span>
                  <span className="text-white/10">|</span>
                  <span className="text-white/20">{step.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Certifications = () => {
  const certs = [
    "Build your own Static Website (NXTWave)",
    "Build your own Responsive Website (NXTWave)",
    "Build your own Dynamic Website (NXTWave)",
    "Introduction to Database",
    "Python Programming",
    "The Joy of computing using Python (NPTEL)",
    "Innovation, Business Models & Entrepreneurship",
    "Design Thinking (NPTEL)"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-brand-text">
          <span className="font-mono text-brand-accent">04.</span> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: '#64ffda' }}
              className="p-4 border border-brand-accent/5 bg-brand-surface/30 rounded-lg flex gap-3 items-start shadow-xl transition-all"
            >
              <Award className="text-brand-accent shrink-0" size={18} />
              <p className="text-sm text-brand-muted font-medium leading-snug">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <section id="contact" className="py-20 px-6 border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">Let's Connect</h2>
          <div className="space-y-4 text-white/40">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent" />
              <span className="hover:text-white transition-colors cursor-pointer">harshaluke7@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent" />
              <span>+91 7670888432</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-accent" />
              <span>Nizamabad, Telangana</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-6 text-white/20">
          <p className="text-sm tracking-tight">Designed & Developed by Harsha Luke</p>
          <div className="flex gap-6">
               <a href="https://linkedin.com/in/harsha-luke" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Linkedin size={22} />
               </a>
               <a href="https://github.com/harsha-luke" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Github size={22} />
               </a>
          </div>
        </div>
      </div>
    </section>
  );
};
