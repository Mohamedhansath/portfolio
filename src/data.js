export const profile = {
  name: "H Mohamed Hansath",
  role: "Full Stack Developer",
  tagline: "Python · FastAPI · React · MySQL · AWS",
  location: "Kumbakonam, Tamil Nadu, India",
  email: "mdhansath@gmail.com",
  phone: "+91 6384237090",
  github: "https://github.com/Mohamedhansath",
  linkedin: "https://www.linkedin.com/in/mohamed-hansath-761011432/",
  portfolio: "https://mohamed-hansath-portfolio.vercel.app/",
  resume: "/Mohamed_Hansath_Resume.pdf",
};

export const skills = [
  { name: "Python", group: "Backend", level: "Core" },
  { name: "FastAPI", group: "Backend", level: "Core" },
  { name: "REST APIs", group: "Backend", level: "Core" },

  { name: "React.js", group: "Frontend", level: "Core" },
  { name: "JavaScript ES6+", group: "Frontend", level: "Core" },
  { name: "HTML5", group: "Frontend", level: "Core" },
  { name: "CSS3", group: "Frontend", level: "Core" },

  { name: "MySQL", group: "Database", level: "Core" },
  { name: "SQL", group: "Database", level: "Core" },
  { name: "Firebase", group: "Database / Services", level: "Beginner" },

  { name: "AWS", group: "Cloud", level: "Cloud" },

  { name: "Docker", group: "DevOps", level: "DevOps" },
  { name: "Kubernetes", group: "DevOps", level: "Basics" },
  { name: "Jenkins", group: "DevOps", level: "Basics" },

  { name: "Linux", group: "Systems", level: "Basics" },

  { name: "Git", group: "Tools", level: "Core" },
  { name: "GitHub", group: "Tools", level: "Core" },
];

export const tools = [
  "VS Code",
  "PyCharm",
  "Postman",
  "Docker Desktop",
  "XAMPP",
  "Git",
  "GitHub",
  "Git Bash",
];

export const awsServices = ["EC2", "S3", "VPC", "RDS", "IAM"];

export const projects = [
  {
    number: "01",
    name: "FORME — 3D E-Commerce Store",
    short: "Immersive product storefront with a scroll-driven interactive 3D product experience.",
    description:
      "Designed a premium concept-store experience using React, Three.js and React Three Fiber. The hero product responds to scroll with 3D rotation, while shoppers can explore product details, specifications, related items, search and filters, save favourites, and manage a cart. Cart and wishlist data persist in browser LocalStorage. Checkout is a demonstration flow only; it does not process real payments or orders.",
    stack: ["React", "Vite", "Three.js", "React Three Fiber", "Drei", "GSAP", "JavaScript", "LocalStorage"],
    github: "https://github.com/Mohamedhansath/3d-ecommerce-store",
    live: "https://forme-3d-ecommerce-store.vercel.app/",
    image: "/projects/forme-3d-store.jpg",
  },
  {
    number: "02",
    name: "Resumind — AI Resume Analyzer",
    short: "Browser-based resume review workspace with ATS-style checks and job-description matching.",
    description:
      "Built a React resume-analysis dashboard that extracts text from uploaded PDFs in the browser, checks resume sections and skills, highlights keyword overlap with a supplied job description, and generates improvement suggestions. Includes analysis history, saved roles, profile settings and JSON backup/restore. The current analyzer uses transparent local heuristics rather than a hosted AI model or a real employer ATS; its score is an estimate, not a hiring prediction.",
    stack: ["React", "Vite", "JavaScript", "PDF.js", "Lucide React", "CSS", "LocalStorage"],
    github: "https://github.com/Mohamedhansath/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-mohamedhansath.vercel.app/",
    image: "/projects/resumind.jpg",
  },
  {
    number: "03",
    name: "ApplyFlow — Job Application Tracker",
    short: "Personal job-search dashboard for organising applications and tracking progress.",
    description:
      "Created a responsive application tracker with dashboard summaries, add/edit/delete workflows, status filters, search, sorting, interview and follow-up dates, notes, and JSON import/export. Registration and profile flows are local demo features; application records are stored in the browser's LocalStorage and are not synced to a server.",
    stack: ["React", "Vite", "JavaScript", "CSS", "Lucide React", "LocalStorage"],
    github: "https://github.com/Mohamedhansath/smart-job-application-tracker",
    live: "https://smart-job-application-tracker-tan.vercel.app/",
    image: "/projects/applyflow.jpg",
  },
  {
    number: "04",
    name: "Car Rental Management System",
    short: "Vehicle rental interface with customer and admin booking workflows.",
    description:
      "Developed a car-rental application with vehicle browsing and details, customer registration and login screens, booking management, customer profiles, and an admin dashboard for cars, users and bookings. The maintained frontend demo uses browser LocalStorage for its application data; it is not connected to a production booking service or payment provider.",
    stack: ["React", "Vite", "JavaScript", "React Router", "CSS", "LocalStorage"],
    github: "https://github.com/Mohamedhansath/car-rental",
    live: "https://car-rental-seven-ochre.vercel.app/",
    image: "/projects/car-rental.jpg",
  },
  {
    number: "05",
    name: "Gym Management System",
    short: "Gym admin dashboard for member records and payment-history workflows.",
    description:
      "Built a responsive gym-management demo with dashboard summaries, member registration and management, payment entry, and payment-history views. Sample member and payment records are persisted in browser LocalStorage, allowing the interface to run without a backend. It is a frontend demonstration rather than a live membership or payment platform.",
    stack: ["React", "Vite", "JavaScript", "React Router", "CSS", "LocalStorage"],
    github: "https://github.com/Mohamedhansath/gym",
    live: "https://gym-woad-kappa.vercel.app/",
    image: "/projects/gym-management.jpg",
  },
];

export const experience = {
  role: "Full Stack Development Intern",
  company: "Vebbox Software Solutions Pvt. Ltd.",
  period: "February 2026 – April 2026",
  detail: "3-month internship",
  bullets: [
    "Worked with HTML, CSS, JavaScript, and React.js for frontend development.",
    "Applied Python and FastAPI concepts for backend development and REST API integration.",
    "Worked with MySQL for SQL queries, database operations, and application data management.",
    "Gained exposure to AWS services including EC2, S3, VPC, RDS, and IAM.",
    "Practiced Docker containerization and gained familiarity with Kubernetes, Jenkins, and Linux basics.",
  ],
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Annai College of Arts and Science",
  location: "Kumbakonam, Tamil Nadu",
  period: "2022 – 2026",
};

export const certifications = [
  {
    title: "Full Stack Development Internship",
    issuer: "Vebbox Software Solutions Pvt. Ltd.",
    date: "April 2026",
    image: "/certificates/full-stack-internship.jpg",
  },
  {
    title: "Python, MySQL, Firebase, FastAPI, GitHub, AWS",
    issuer: "Vebbox Software Solutions",
    date: "January 2026",
    image: "/certificates/python-mysql-firebase-fastapi-github-aws.jpg",
  },
  {
    title: "HTML, CSS, Bootstrap, JavaScript, React JS",
    issuer: "Vebbox Software Solutions",
    date: "September 2025",
    image: "/certificates/html-css-bootstrap-javascript-react-js.jpg",
  },
];
