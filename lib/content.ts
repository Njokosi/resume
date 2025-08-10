export interface Intro {
  name: string;
  about: string;
  href: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface ResumeItem {
  title: string;
  href?: string;
  date?: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface EducationItem extends ResumeItem {
  title: string;
  date: string;
  location: string;
  description: string[];
}

export interface ProjectItem extends ResumeItem {
  title: string;
  href?: string;
  description: string[];
  technologies?: string[];
}

export interface CertificationItem extends ResumeItem {
  title: string;
  date?: string;
  description: string[];
}

export const intro: Intro = {
  name: "Njokosi Jones Kawunju",
  about:
    "Senior Software Engineer with over 4 years of experience designing and delivering scalable, enterprise-grade applications. Skilled in React, Next.js, Django, and Vue.js, with a strong background in multi-tenant SaaS architecture, systems integration, and leading teams to build secure, high-performance solutions.",
  href: "https://njokosi.dev",
  github: "https://github.com/njokosi",
  linkedin: "https://linkedin.com/in/njokosi",
  email: "njokosi@gmail.com",
};

export const work: ResumeItem[] = [
  {
    title: "Senior Software Engineer · Zuno Carbon",
    href: "https://zunocarbon.com",
    date: "Aug 2022 · Present",
    location: "Remote, Singapore",
    description: [
      "Architected and led development of a multi-tenant SaaS platform for enterprise clients, ensuring secure data segregation and compliance with ISSB, AICPA SOC, and ISO 14064 standards.",
      "Engineered a carbon emissions processing engine handling tens of thousands of daily data points with improved performance and accuracy.",
      "Designed and implemented an automated CDP reporting system, replacing manual workflows.",
      "Led mentorship programs that elevated code quality, strengthened test coverage, and reduced production issues.",
    ],
    technologies: ["React.js", "Django", "PostgreSQL", "AWS", "Docker", "Vue.js", "Next.js", "CI/CD"],
  },
  {
    title: "Software Engineer · Zuno Carbon",
    href: "https://zunocarbon.com",
    date: "Jan 2022 · Aug 2022",
    location: "Remote, Singapore",
    description: [
      "Implemented CI/CD pipelines with Celery, RabbitMQ, and Docker to streamline deployment cycles.",
      "Developed an RBAC-based user management system supporting large-scale organizational hierarchies.",
      "Built a real-time task monitoring dashboard with WebSockets for operational visibility.",
      "Optimized backend queries to deliver sub-second dashboard load times.",
    ],
    technologies: ["Celery", "RabbitMQ", "Docker", "CI/CD", "RBAC", "WebSockets", "SQL"],
  },
  {
    title: "Software Engineer & Technical Lead · e-Government Authority",
    href: "https://www.ega.go.tz",
    date: "Feb 2021 · Aug 2021",
    location: "Dodoma, Tanzania",
    description: [
      "Directed an 8-person team delivering national-scale web applications for government agencies and citizens.",
      "Developed mikutano.gov.go.tz to support secure, concurrent online government meetings.",
      "Built eboard.gov.go.tz, a digital meeting platform for government boards.",
      "Implemented security monitoring systems to enhance platform resilience.",
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "Security Monitoring", "System Architecture"],
  },
  {
    title: "Full-Stack Developer & System Architect · Agricom & Bravo Logistics",
    date: "Aug 2021 · Jan 2022",
    location: "Dar es Salaam, Tanzania",
    description: [
      "Rebuilt the corporate website using Next.js, improving engagement and responsiveness.",
      "Integrated SAP ERP with attendance tracking to automate payroll operations.",
      "Optimized infrastructure to reduce downtime and improve system reliability.",
    ],
    technologies: ["Next.js", "SAP ERP", "API Integration", "System Architecture"],
  },
  {
    title: "Software Engineer & Systems Analyst · Judiciary Statistical Dashboard",
    date: "May 2019 · Jul 2019",
    location: "Dar es Salaam, Tanzania",
    description: [
      "Analyzed judiciary platforms across 500+ courts, identifying critical system improvements.",
      "Implemented enhancements that increased uptime and performance for court management systems.",
    ],
    technologies: ["Systems Analysis", "Performance Optimization", "Dashboard Development"],
  },
];

export const education: EducationItem[] = [
  {
    title: "B.Tech in Computer Science & Engineering (Information Security) · VIT University",
    date: "2017 · 2021",
    location: "Vellore, India",
    description: [
      "Specialized in Information Security and Software Engineering.",
      "Completed advanced coursework in algorithms, data structures, and system design.",
      "Gained expertise in cybersecurity, network security, and secure software development.",
    ],
  },
  {
    title: "Certificate in French Studies (Level 1) · Université Badji Mokhtar Annaba",
    date: "2015 · 2016",
    location: "Annaba, Algeria",
    description: [
      "Completed foundational French language studies.",
      "Developed cross-cultural communication skills.",
      "Enhanced international perspective and adaptability.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Homebora",
    description: [
      "Property Management SaaS platform for landlords and property managers.",
      "Developed with Django, React.js, PostgreSQL, Celery, Redis, and AWS.",
      "Includes automated rent collection, maintenance tracking, and tenant communication.",
    ],
    technologies: ["Django", "React.js", "PostgreSQL", "Celery", "Redis", "AWS"],
  },
  {
    title: "Scrum Story Point Planner",
    description: [
      "Real-time collaborative planning tool for agile development teams.",
      "Built with Next.js, Supabase, and WebSockets to enable instant updates.",
      "Adopted by Zuno Carbon development teams for sprint planning.",
    ],
    technologies: ["Next.js", "Supabase", "WebSockets", "Real-time Collaboration"],
  },
  {
    title: "Web Security Monitoring System",
    description: [
      "Automated system for monitoring web application security and performance.",
      "Developed with Django, Python, and Shell scripting.",
      "Tracks SSL certificates, domain availability, and performance metrics.",
    ],
    technologies: ["Django", "Python", "Shell Scripting", "SSL", "Security Monitoring"],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Winner · OceanChallenge4Africa Hackathon",
    date: "2022",
    description: [
      "First place in Garage48 OceanChallenge4Africa Hackathon.",
      "Created an innovative solution addressing ocean conservation challenges.",
    ],
  },
  {
    title: "AWS Fundamentals & Security in Google Cloud Platform",
    date: "2020",
    description: [
      "Completed AWS fundamentals training.",
      "Gained expertise in cloud security best practices on Google Cloud Platform.",
    ],
  },
  {
    title: "Software Architecture & Agile Practices",
    date: "2020",
    description: [
      "Advanced training in software architecture design patterns.",
      "Specialized in Agile development methodologies and practices.",
    ],
  },
  {
    title: "Algorithms Specialization · Stanford University",
    date: "2020",
    description: [
      "Completed advanced studies in algorithms and data structures.",
      "Developed strong skills in algorithmic problem-solving.",
    ],
  },
];
