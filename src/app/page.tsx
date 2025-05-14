'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '@/components/NavBar';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  // Refs for scroll animations
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress: aboutScrollY } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  const aboutY = useTransform(aboutScrollY, [0, 1], [50, -50]);
  
  // Real project data from CV
  const projects = [
    {
      title: "Budget Based Trip Planner",
      description: "Made a web application using Vue.js and Flask that offers personalized recommendations using a machine learning model, customizable itineraries, and weather information based on the user's budget and preferences.",
      imageSrc: "/project-budget.png",
      technologies: ["Vue.js", "Flask", "Machine Learning", "AWS"],
      projectUrl: "https://github.com/ritik23j",
      githubUrl: "https://github.com/ritik23j"
    },
    {
      title: "Amazon Price Tracker",
      description: "Developed a price-tracking tool to monitor Amazon product prices. Users receive notifications of price drops or increases of the added product, empowering them to make informed purchasing decisions.",
      imageSrc: "/project-amazonTracker.png",
      technologies: ["Redis", "AWS", "Flask", "Grafana", "RabbitMQ"],
      projectUrl: "https://github.com/ritik23j",
      githubUrl: "https://github.com/ritik23j"
    },
    {
      title: "Web UI for Stable Diffusion",
      description: "Implemented Web UI with Vue.js and Flask, containerized by Docker. Developed RESTful APIs for seamless integration between frontend, backend, and S3 Bucket for image storage.",
      imageSrc: "/project-portfolio.jpg",
      technologies: ["Vue.js", "Flask", "Docker", "GCP", "Kubernetes"],
      projectUrl: "https://github.com/ritik23j",
      githubUrl: "https://github.com/ritik23j"
    },
    {
      title: "MyDrive Web Application",
      description: "Developed the MyDrive web application platform for Tata Motors, enabling file and folder uploads to Amazon S3, along with download, sharing capabilities, and expiration time settings.",
      imageSrc: "/project-website.jpg",
      technologies: ["JavaScript", "ReactJS", "AWS S3"],
      projectUrl: "https://github.com/ritik23j",
      githubUrl: "https://github.com/ritik23j"
    }
  ];
  

  // Skills data grouped by category from CV
  const skills = {
    languages: ["Java", "C++", "Python", "JavaScript", "CSS", "HTML", "SQL", "GraphQL", "GoLang", "TypeScript", "Next.js"],
    frameworks: ["Spring", "Spring Boot", "Hibernate", "Angular", "React", "Node.js", "Express"],
    databases: ["Postgres", "MySQL", "NoSQL", "Redis"],
    tools: ["OOPS", "Design Patterns", "Git", "Kubernetes", "Docker", "JIRA", "Kafka", "AWS", "WebSockets"]
  };

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 bg-gradient-to-br from-background via-background to-background-alt">
        {/* Background gradient effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-light/20 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Text content with animation */}
        <div className="flex flex-col justify-center items-center text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I&apos;m <span className="gradient-text">Ritik</span>
            </h1>
          </motion.div>
          
          <AnimatedText 
            text="Software Engineer & Full Stack Developer" 
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-foreground/80"
            delay={1}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-border font-medium hover:bg-card-bg transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        {/* Abstract shapes */}
        <motion.div 
          className="absolute w-full h-full pointer-events-none z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-accent/10 rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                x: [0, 10, -10, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 - i,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: [0.3, 1, 0.3], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            delay: 2
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground/70"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 min-h-screen flex flex-col justify-center"
        ref={aboutRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="About Me" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              style={{ y: aboutY }}
              className="relative w-full h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.png" // Add your profile image to public folder
                alt="Ritik"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            
            <div>
              <AnimatedText 
                text="Software Engineer & Full Stack Developer with expertise in web applications"
                className="text-xl font-medium mb-6"
                once={true}
                delay={0.2}
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-foreground/80 mb-6"
              >
                I&apos;m a Software Engineer based in Boulder, CO. My expertise spans full-stack development, RESTful APIs, and cloud technologies. At Zinnia, I design and implement scalable RESTful APIs with Spring Boot, working with authentication protocols like OAuth and JWT to optimize data interactions and system integration.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-foreground/80 mb-8"
              >
                I have experience working with Kafka for high-throughput messaging and NoSQL for scalable data handling, enabling real-time monitoring and debugging via Datadog log integration. I build reusable components for financial web applications using React, Next.js, JavaScript, TypeScript, and Node.js, significantly enhancing the digital buying experience and supporting end-to-end solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a 
                  href="/resume.pdf" // Add your resume PDF to public folder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-border font-medium hover:bg-card-bg transition-colors"
                >
                  Download Resume
                  <svg 
                    className="ml-2 h-4 w-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card-bg" ref={projectsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="My Projects" 
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            once={true}
          />
          
          <AnimatedText 
            text="Some of my recent work" 
            className="text-lg text-foreground/70 mb-12 text-center"
            once={true}
            delay={0.2}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                index={index}
                {...project}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/ritik23j"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              See More on GitHub
              <svg 
                className="ml-2 h-4 w-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="My Skills" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-bg rounded-xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 + index * 0.1 }}
                      className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Education" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                <span className="text-foreground/70">August 2022 - May 2024</span>
              </div>
              <h4 className="text-lg text-accent mb-2">University of Colorado Boulder</h4>
              <p className="text-foreground/80">GPA: 3.8/4.0</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Bachelor of Technology in Computer Engineering</h3>
                <span className="text-foreground/70">August 2016 - July 2020</span>
              </div>
              <h4 className="text-lg text-accent mb-2">Thapar Institute of Engineering and Technology, Patiala, India</h4>
              <p className="text-foreground/80">GPA: 8.62/10</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Professional Experience" 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            once={true}
          />
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-foreground/70">May 2024 - Present</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Zinnia, Boulder, USA</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Designed and implemented scalable RESTful APIs with Spring Boot, integrated authentication protocols like OAuth and JWT, optimizing data interactions and system integration.</li>
                <li>Integrated Kafka for high-throughput messaging and NoSQL for scalable data handling. Enabled real-time monitoring and debugging via Datadog log integration.</li>
                <li>Built reusable components for financial web applications using React, Next.js, JavaScript, TypeScript, and Node.js, significantly enhancing the digital buying experience and supporting end-to-end life insurance solutions.</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Capstone Project</h3>
                <span className="text-foreground/70">September 2023 - May 2024</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Virufy, Remote, USA</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Engineered a data pipeline using Airflow and PySpark, optimizing the real-time processing and storage of large-scale Covid-19 patient data in S3 buckets to support high-throughput, low-latency applications.</li>
                <li>Conducted data analysis using NumPy and Pandas to derive actionable insights from the processed data which was fed into ML model.</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-foreground/70">September 2020 - June 2022</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Amdocs, Pune, India</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>AT&T Project: Led the design and implementation of scalable financial systems using Java and Spring, increasing transaction capacity by 40% and enhancing system responsiveness with frontend technologies.</li>
                <li>Designed and maintained a CI/CD pipeline using GitHub, Jenkins, OpenShift, and Terraform to automate build, test (65% coverage), infrastructure provisioning, and deployment of microservices on commit to master/dev branches, ensuring consistent, scalable, and reliable delivery.</li>
                <li>Enhanced Microservices by creating a new package and hosting it in nexus repo which reduces errors by 26 percent due to deployment of the wrong version of microservices.</li>
                <li>Created Bash shell scripts in Linux to bootstrap, terminate and check the status of servers and automated the process of ingestion of bills for BriteBill and then improving the efficiency of deliveries by 13 percent.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card-bg rounded-xl p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Graduate Engineering Trainee</h3>
                <span className="text-foreground/70">January 2020 - June 2020</span>
              </div>
              <h4 className="text-lg text-accent mb-4">Tata Motors, Thane, India</h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Developed the MyDrive web application platform, enabling file and folder uploads to Amazon S3, along with download, sharing capabilities, and expiration time settings using JavaScript and ReactJS.</li>
                <li>The developed product was substantially able to reduce the costs by almost 15 percent that Tata Motors spent for platforms like OneDrive.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedText 
            text="Get In Touch" 
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            once={true}
          />
          
          <AnimatedText 
            text="Have a question or want to work together?" 
            className="text-lg text-foreground/70 mb-12 text-center"
            once={true}
            delay={0.2}
          />
          
          <ContactForm />
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:ritik23j@gmail.com" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              ritik23j@gmail.com
            </a>
            <a 
              href="tel:+17203132765" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +1 (720) 313-2765
            </a>
            <a 
              href="https://linkedin.com/in/ritik-jain23" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"></circle>
              </svg>
              linkedin.com/in/ritik-jain23
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}