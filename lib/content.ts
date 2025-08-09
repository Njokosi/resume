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
}

export interface CertificationItem extends ResumeItem {
  title: string;
  date?: string;
  description: string[];
}

export const intro: Intro = {
  name: "Njokosi Jones Kawunju",
  about:
    "I'm Software Engineer with over 4 years of experience building scalable, enterprise-grade applications from the ground up. I specialize in React, Next.js, Django, and Vue.js, with deep expertise in multi-tenant SaaS platforms, system architecture, and leading development teams to deliver secure, high-performance solutions.",
  href: "https://njokosi.dev", // You'll need to update this to actual portfolio URL
  github: "https://github.com/njokosi",
  linkedin: "https://linkedin.com/in/njokosi",
  email: "njokosi@gmail.com",
};

export const work: ResumeItem[] = [
  {
    title: "Senior Software Engineer at Zuno Carbon",
    href: "https://zunocarbon.com",
    date: "Aug 2022 to Present",
    location: "Remote, Singapore",
    description: [
      "Architected and led development of a multi-tenant SaaS platform for 20+ enterprise clients, implementing robust data segregation and security protocols (Certified by ISSB, AICPA SOC, ISO 14064)",
      "Built carbon emissions engine processing 10,000+ daily data points, improving accuracy by 40% and reducing processing time from 30 minutes to 4 minutes",
      "Designed automated CDP reporting system with React.js and Django, cutting manual report generation time by 80%",
      "Mentored 3 junior developers, raising code quality metrics by 60% and achieved 90%+ test coverage, reducing production bugs by 75%",
    ],
  },
  {
    title: "Software Engineer at Zuno Carbon",
    href: "https://zunocarbon.com",
    date: "Jan 2022 to Aug 2022",
    location: "Remote, Singapore",
    description: [
      "Built CI/CD pipelines with Celery, RabbitMQ, and Docker, enabling weekly releases across 3 teams",
      "Developed RBAC-based user management system for 500+ users across organizations",
      "Created real-time task monitoring dashboard with WebSockets",
      "Optimized database queries, cutting dashboard load time from 15s to 1s",
    ],
  },
  {
    title: "Software Engineer & Technical Lead at e-Government Authority",
    date: "Feb 2021 to Aug 2021",
    location: "Dodoma, Tanzania",
    description: [
      "Led an 8-person team delivering 4 national-scale government web applications serving 100k+ citizens",
      "Developed mikutano.gov.go.tz, enabling 50+ concurrent government meetings",
      "Built eboard.gov.go.tz, a digital board meeting platform used by 50+ government boards",
      "Implemented security monitoring reducing incidents by 50%",
    ],
  },
  {
    title: "Full-Stack Developer & System Architect at Agricom & Bravo Logistics",
    date: "Aug 2021 to Jan 2022",
    location: "Dar es Salaam, Tanzania",
    description: [
      "Rebuilt company website with Next.js, improving user engagement by 120%",
      "Integrated SAP ERP with attendance tracking system, automating payroll for 60+ employees",
      "Optimized system performance, significantly reducing downtime and improving reliability",
    ],
  },
  {
    title: "Software Engineer & Systems Analyst at Judiciary Statistical Dashboard System",
    date: "May 2019 to Jul 2019",
    location: "Dar es Salaam, Tanzania",
    description: [
      "Analyzed judiciary platforms serving 500+ courts, identifying 15 critical system improvements",
      "Implemented solutions improving system uptime and reducing incidents by 60%",
      "Enhanced platform performance and reliability for court management systems",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "B.Tech in Computer Science & Engineering (Information Security) at VIT University",
    date: "2017 to 2021",
    location: "Vellore, India",
    description: [
      "Specialized in Information Security and Software Engineering",
      "Completed comprehensive coursework in algorithms, data structures, and system design",
      "Gained expertise in cybersecurity, network security, and secure software development",
    ],
  },
  {
    title: "Certificate in French Studies (Level 1) at Université Badji Mokhtar Annaba",
    date: "2015 to 2016",
    location: "Annaba, Algeria",
    description: [
      "Completed foundational French language studies",
      "Developed cross-cultural communication skills",
      "Enhanced international perspective and adaptability",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Homebora",
    description: [
      "Property Management SaaS platform for landlords and property managers",
      "Built with Django, React.js, PostgreSQL, Celery, Redis, and AWS",
      "Features automated rent collection, maintenance tracking, and tenant communication",
    ],
  },
  {
    title: "Scrum Story Point Planner",
    description: [
      "Real-time collaborative planning tool for agile development teams",
      "Built with Next.js, Supabase, and WebSockets for real-time collaboration",
      "Currently used by Zuno Carbon development teams for sprint planning",
    ],
  },
  {
    title: "Web Security Monitoring System",
    description: [
      "Automated monitoring system for web application security and performance",
      "Built with Django, Python, and Shell Scripting",
      "Monitors SSL certificates, domain availability, and performance metrics",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Winner — OceanChallenge4Africa Hackathon",
    date: "2022",
    description: [
      "First place winner at Garage48 OceanChallenge4Africa Hackathon",
      "Developed innovative solution for ocean conservation challenges",
    ],
  },
  {
    title: "AWS Fundamentals & Security in Google Cloud Platform",
    date: "2020",
    description: [
      "Completed comprehensive AWS fundamentals training",
      "Gained expertise in cloud security best practices on Google Cloud Platform",
    ],
  },
  {
    title: "Software Architecture & Agile Practices",
    date: "2020",
    description: [
      "Advanced certification in software architecture design patterns",
      "Specialized training in Agile development methodologies and practices",
    ],
  },
  {
    title: "Algorithms Specialization — Stanford University",
    date: "2020",
    description: [
      "Completed comprehensive algorithms and data structures specialization",
      "Advanced study of algorithmic thinking and problem-solving techniques",
    ],
  },
];