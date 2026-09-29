export const portfolioData = {
  navbar: {
    brandFirstName: "RAJ",
    brandLastName: "",
    navLinks: [
      { name: "Home", href: "#home", id: "home" },
      { name: "About", href: "#about", id: "about" },
      { name: "Education", href: "#education", id: "education" },
      { name: "Skills", href: "#skills", id: "skills" },
      { name: "Soft Skills", href: "#softskills", id: "softskills" },
      { name: "Experience", href: "#experience", id: "experience" },
      { name: "Profiles", href: "#profiles", id: "profiles" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Certs", href: "#certs", id: "certs" },
      { name: "Contact", href: "#contact", id: "contact" },
    ],
  },

  hero: {
    badge: "OPEN TO OPPORTUNITIES",
    greeting: "HI, I'M",
    nameLine1: "Thurupati",
    nameLine2: "Raju",
    fullName: "Thurupati Raju",
    profileImage: "/raju_pass_pic.jpg",
    typewriterPrefix: "I build ",
    typewriterWords: [
      "scalable APIs...",
      "clean interfaces...",
      "AI-powered apps...",
    ],
    role: "Full-Stack Developer & AI Engineer",
    paragraph:
      "Building scalable applications with clean code, strong DSA fundamentals, and innovative technology. MERN stack specialist with AI integration expertise.",
    buttons: [
      { label: "View Projects →", href: "#projects", variant: "red-outline" },
      { label: "Contact Me", href: "#contact", variant: "white-outline" },
      { label: "Resume ⬇", href: "#resume", variant: "white-outline" },
    ],
    availability: "Available for work",
    socials: [
      { name: "GitHub", href: "https://github.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
    ],
  },

  personal: {
    name: "Thurupati Raju",
    handle: "@raju_dev",
    title: "Full-Stack Developer & AI Engineer",
    tagline: "Building scalable applications with clean code, strong DSA fundamentals, and innovative technology.",
    bio: "Building scalable applications with clean code, strong DSA fundamentals, and innovative technology. MERN stack specialist with AI integration expertise.",
    location: "Hyderabad, India / Remote",
    status: "OPEN TO OPPORTUNITIES",
    email: "thurupatiraju261@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resumeUrl: "#",
    metrics: [
      { label: "Production Deployments", value: "40+", suffix: "" },
      { label: "Algorithmic Problems", value: "1,250+", suffix: "" },
      { label: "System Uptime Average", value: "99.98%", suffix: "" },
      { label: "Years Experience", value: "4+", suffix: "Years" },
    ],
  },

  about: {
    title: "About Me",
    subtitle: "Engineering robust full-stack systems and intelligent AI solutions.",
    paragraphs: [
      "I'm a Full-Stack Developer and AI Engineer passionate about building scalable applications and solving real-world problems. From AI-powered systems to elegant backend architectures, I create solutions that matter.",
      "Driven by strong DSA fundamentals and modern web technologies, I specialize in MERN stack development with AI integration. 500+ LeetCode problems solved."
    ],
    contactInfo: {
      institute: "Sample Institute of Technology",
      email: "thurupatiraju261@gmail.com",
      phone: "+91 90000 00000",
      cvUrl: "#resume"
    },
    stats: [
      { value: 5, label: "FULL STACK PROJECTS" },
      { value: 114, label: "LEETCODE PROBLEMS" },
      { value: 1, label: "NPTEL CERTIFICATIONS" },
      { value: 4277, label: "GATE 2026 AIR" }
    ]
  },

  education: [
    {
      year: "2022 — 2026",
      statusTag: "Undergraduate",
      degree: "B.Tech Information Technology",
      institution: "Sample Institute of Technology",
      score: "8.41",
      unit: "CGPA",
      percentage: 84.1,
      description: "Focus: Full-Stack Development & AI. GATE 2026 AIR 4277. Building scalable web applications and AI-powered systems.",
      tags: ["Data Structures", "Algorithms", "MERN Stack", "AI Systems"]
    },
    {
      year: "2020 — 2022",
      statusTag: "Senior Secondary",
      degree: "Class XII (CBSE)",
      institution: "Sample Public School",
      score: "74.2",
      unit: "%",
      percentage: 74.2,
      description: "Strong foundation in Mathematics and Science with consistent academic performance.",
      tags: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      year: "2019 — 2020",
      statusTag: "Secondary",
      degree: "Class X",
      institution: "Sample Public School",
      score: "10.0",
      unit: "CGPA",
      percentage: 100,
      description: "Excellent performance across all subjects with a perfect score.",
      tags: ["Science", "Mathematics", "English"]
    }
  ],

  experience: [
    {
      role: "Independent Developer",
      company: "Full-Stack Projects",
      period: "2024 — Present",
      badge: null,
      description: "Developed full-stack applications using the MERN stack and Python frameworks. Implemented scalable REST APIs with Node.js and Express.js for authentication and database operations.",
      bullets: null,
      tags: ["React", "Node.js", "Express", "MongoDB", "Python"]
    },
    {
      role: "Software Engineering Virtual Intern",
      company: "Sample Virtual Program, Sample Bank Co.",
      period: "Mar 2026 — Apr 2026",
      badge: "Certificate",
      description: "Completed a job simulation covering project setup, Kafka integration for event-driven systems, database integration, and REST API development with controller implementation.",
      bullets: null,
      tags: ["Java", "Spring Boot", "Kafka", "REST API"]
    },
    {
      role: "SDE Intern, Director's Office",
      company: "Sample Organization, Sample City, India",
      period: "Feb 2026 — Present",
      badge: "Active",
      description: null,
      bullets: [
        "Engineered scalable backend systems for the company's proprietary AI model as part of the Director's Office.",
        "Developed and integrated 10+ REST API endpoints with third-party service integrations, authentication, and data pipelines, reducing average response latency by ~30%.",
        "Collaborated directly with the Director to translate product requirements into technical solutions."
      ],
      tags: ["Node.js", "REST API", "MongoDB", "JWT"]
    }
  ],

  codingProfiles: {
    title: "Coding Profiles",
    subtitle: "Continuous learning and problem-solving excellence across leading competitive programming platforms.",
    profiles: [
      {
        platform: "LeetCode",
        iconName: "Code2",
        text: "Strong foundation in algorithms and data structures. Solved problems across arrays, trees, graphs, dynamic programming, and more.",
        link: "https://leetcode.com",
        stats: [
          { label: "PROBLEMS SOLVED", value: "200+" },
          { label: "PROFILE", value: "Advanced" }
        ]
      },
      {
        platform: "GeeksforGeeks",
        iconName: "BookOpen",
        text: "Comprehensive DSA learning and practice. Leveraging structured tutorials and problem sets for deep algorithmic understanding.",
        link: "https://geeksforgeeks.org",
        stats: [
          { label: "CONTRIBUTIONS", value: "Active" },
          { label: "LEARNING", value: "DSA Expert" }
        ]
      }
    ]
  },

  techStack: {
    title: "Tech Stack",
    categories: [
      { id: "All", label: "All" },
      { id: "Languages", label: "Languages" },
      { id: "Frameworks", label: "Frameworks" },
      { id: "Libraries", label: "Libraries" },
      { id: "Tools", label: "Tools" }
    ],
    items: [
      // Languages: Java, JavaScript, C, SQL, HTML, CSS
      { name: "Java", category: "Languages", iconKey: "Java" },
      { name: "JavaScript", category: "Languages", iconKey: "JavaScript" },
      { name: "C", category: "Languages", iconKey: "C" },
      { name: "SQL", category: "Languages", iconKey: "SQL" },
      { name: "HTML", category: "Languages", iconKey: "HTML" },
      { name: "CSS", category: "Languages", iconKey: "CSS" },

      // Frameworks: React, Node.js, Express, Tailwind CSS
      { name: "React", category: "Frameworks", iconKey: "React" },
      { name: "Node.js", category: "Frameworks", iconKey: "Nodejs" },
      { name: "Express", category: "Frameworks", iconKey: "Express" },
      { name: "Tailwind CSS", category: "Frameworks", iconKey: "Tailwind" },

      // Libraries: Redux, Axios, Chart.js
      { name: "Redux", category: "Libraries", iconKey: "Redux" },
      { name: "Axios", category: "Libraries", iconKey: "Axios" },
      { name: "Chart.js", category: "Libraries", iconKey: "Chartjs" },

      // Tools: Git, GitHub, Docker, Postman, VS Code, Linux, MongoDB, PostgreSQL, Firebase, AWS
      { name: "Git", category: "Tools", iconKey: "Git" },
      { name: "GitHub", category: "Tools", iconKey: "GitHub" },
      { name: "Docker", category: "Tools", iconKey: "Docker" },
      { name: "Postman", category: "Tools", iconKey: "Postman" },
      { name: "VS Code", category: "Tools", iconKey: "VSCode" },
      { name: "Linux", category: "Tools", iconKey: "Linux" },
      { name: "MongoDB", category: "Tools", iconKey: "MongoDB" },
      { name: "PostgreSQL", category: "Tools", iconKey: "PostgreSQL" },
      { name: "Firebase", category: "Tools", iconKey: "Firebase" },
      { name: "AWS", category: "Tools", iconKey: "AWS" }
    ]
  },

  softSkills: {
    title: "Soft Skills",
    subtitle: "Beyond technical expertise, the human qualities that drive collaboration, innovation, and success.",
    items: [
      {
        title: "Problem Solving",
        iconName: "Lightbulb",
        description: "Breaking down complex challenges into clear, logical steps and crafting efficient, creative solutions through structured thinking and DSA practice."
      },
      {
        title: "Team Player",
        iconName: "Users",
        description: "Collaborating with team members, sharing knowledge, prioritizing shared goals, and supporting others to achieve the best outcomes."
      },
      {
        title: "Adaptability",
        iconName: "RefreshCw",
        description: "Comfortable switching between programming languages, tools, and problem domains, from MERN stack to AI systems, with a growth mindset."
      },
      {
        title: "Communication",
        iconName: "MessageCircle",
        description: "Translating complex technical concepts into clear, compelling narratives through code documentation, presentations, and effective team updates."
      },
      {
        title: "Analytical Thinking",
        iconName: "BarChart3",
        description: "Naturally data-driven, approaching every problem with curiosity, rigor, and a focus on actionable insights."
      },
      {
        title: "Initiative & Leadership",
        iconName: "Rocket",
        description: "Self-motivated and proactive, taking ownership of projects, driving improvements, and inspiring others through consistent excellence."
      }
    ]
  },

  projects: [
    {
      id: "restaurant-management",
      title: "Restaurant Management System",
      description: "Single-restaurant internal web app for table management, menu, orders, kitchen display, billing, payments, inventory, and reporting.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "restaurant"
    },
    {
      id: "ai-ats-resume",
      title: "AI ATS Resume Analyzer",
      description: "Resume analysis system improving job matching accuracy by 40%. Built with keyword scoring and NLP parsing.",
      tags: ["Python", "React", "Flask", "NLP"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "resume"
    },
    {
      id: "finance-tracker",
      title: "Finance Tracker",
      description: "Personal finance management platform with JWT authentication, analytics dashboard, and transaction management.",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "finance"
    },
    {
      id: "legal-assistant-ai",
      title: "Legal Assistant AI",
      description: "AI-powered legal assistant that simplifies complex legal documents into accessible language guidance.",
      tags: ["React", "Node.js", "OpenAI API"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "legal"
    },
    {
      id: "repo-analyzer",
      title: "Repo Analyzer",
      description: "GitHub profile analyzer that provides deep insights into coding activity, repositories, and developer statistics.",
      tags: ["React", "Node.js", "GitHub API"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "repo"
    },
    {
      id: "auth-system",
      title: "Auth System",
      description: "Full-stack authentication application with user registration, JWT-based login, protected routes, and profile management.",
      tags: ["React", "Express", "JWT", "MongoDB"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      previewType: "auth"
    }
  ],

  certifications: [
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      year: "2025",
      link: "#"
    },
    {
      name: "Software Engineering Job Simulation",
      issuer: "Sample Virtual Program",
      year: "2026",
      link: "#"
    },
    {
      name: "Full-Stack Web Development",
      issuer: "Sample Academy",
      year: "2025",
      link: "#"
    }
  ],

  contact: {
    heading: "Let's build something great together.",
    email: "thurupatiraju261@gmail.com",
    phone: "+91 90000 00000",
    location: "Sample City, India",
    socials: [
      { name: "GitHub", href: "https://github.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Twitter/X", href: "https://x.com" }
    ]
  },

  footer: {
    logo: "RAJ",
    tagline: "Crafting modern full-stack web applications and AI-driven solutions with speed and precision.",
    copyright: "© 2026 Thurupati Raju. All rights reserved."
  }
};
