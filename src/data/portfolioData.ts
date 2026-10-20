export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  futureImprovements: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  badge: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Competent" | "In Progress";
    percent: number;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  achievements: string[];
  skillsApplied: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Md. Shahjalal Rafid",
  designation: "Full Stack Web Developer | Frontend Specialist",
  tagline: "Engineering Scalable Digital Experiences with Structural Rigor & Algorithmic Logic",
  bio: "Driven by an intense passion for programming and algorithmic problem-solving, I transitioned from a high-volume financial banking career to dedicated Full-Stack Web Development. With a B.Sc. in Civil Engineering from BUET and immersive MERN training at Creative IT Institute, I blend engineering discipline with modern JavaScript architectures to craft responsive, resilient web applications.",
  email: "shahjalalrafid201694@gmail.com",
  phone: "01813262217",
  whatsapp: "01813262217",
  whatsappUrl: "https://wa.me/8801813262217?text=Hello%20Rafid%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/shahjalalrafid-dev",
  linkedin: "https://www.linkedin.com/in/md-shahjalal-rafid",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  availability: "Available for Remote Roles & High-Impact Freelance Projects",
};

export const HIGHLIGHT_STATS = [
  { label: "Projects Completed", value: "10+", detail: "Web apps & interactive platforms" },
  { label: "Technical Focus", value: "MERN Stack", detail: "Next.js, React, Node.js & Mongo" },
  { label: "Engineering Foundation", value: "BUET", detail: "B.Sc. in Civil Engineering" },
  { label: "Financial Ops Managed", value: "20M+ BDT", detail: "Daily Core Banking accuracy" },
  
];

export const ABOUT_DETAILS = {
  intro:
    "I am a developer who believes great software is not just functional syntax, but an elegant, resilient solution designed around the humans who rely on it every day.",
  story: [
    "My analytical journey began at Bangladesh University of Engineering and Technology (BUET), where I earned my B.Sc. in Civil Engineering. The intense mathematical modeling, structural mechanics, and algorithmic optimization developed in me a systematic way of decomposing complex problems into clean, modular solutions.",
    "Following graduation, I spent three years advancing through high-responsibility roles in the banking sector at United Commercial Bank PLC, Premier Bank PLC, and Janata Bank PLC. Managing mission-critical transactional pipelines exceeding 20M+ BDT daily within Core Banking Systems (CBS) instilled in me an uncompromising standard for zero-defect execution, transaction atomicity, and computational reliability.",
    "Guided by an innate drive for coding and modern technology, I made the conscious decision to channel this rigor into Full-Stack Web Development. Currently advancing my architectural mastery through Creative IT Institute and Programming Hero, I focus on delivering modern front-end interfaces backed by clean, maintainable server-side logic.",
  ],
  interests: [
    {
      title: "Fitness & Strength Training",
      description: "Dedicated to disciplined gym workouts — the direct real-world inspiration behind building FitLog.",
      icon: "Dumbbell",
    },
    {
      title: "Algorithmic Logic & Math",
      description: "Enjoy breaking down data structures, logic puzzles, and computational optimization challenges.",
      icon: "Binary",
    },
    {
      title: "Continuous Architectural Learning",
      description: "Constantly exploring Next.js App Router nuances, server components, and full-stack patterns.",
      icon: "BookOpen",
    },
    {
      title: "Sports & Strategic Games",
      description: "Keeps my competitive spirit sharp, fast-paced decision making, and team collaboration alive.",
      icon: "Trophy",
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building fast, accessible, responsive, and pixel-precise client interfaces.",
    badge: "Specialty",
    skills: [
      { name: "React.js", level: "Advanced", percent: 92, highlight: true },
      { name: "Next.js (App Router / Turbopack)", level: "Advanced", percent: 90, highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", percent: 90, highlight: true },
      { name: "Tailwind CSS", level: "Advanced", percent: 94, highlight: true },
      { name: "HTML5 & Semantic Web", level: "Advanced", percent: 95 },
      { name: "CSS3 / Modern Flexbox & Grid", level: "Advanced", percent: 92 },
      { name: "DOM Manipulation & Events", level: "Advanced", percent: 90 },
      { name: "Responsive UI & Mobile-First", level: "Advanced", percent: 94 },
      { name: "Bootstrap 5", level: "Proficient", percent: 85 },
      { name: "Shadcn UI & Component Systems", level: "Proficient", percent: 84 },
    ],
  },
  {
    title: "Backend & Database",
    description: "Developing RESTful microservices, asynchronous APIs, and data models.",
    badge: "In Progress",
    skills: [
      { name: "Node.js", level: "Proficient", percent: 80, highlight: true },
      { name: "Express.js", level: "Proficient", percent: 82, highlight: true },
      { name: "RESTful API Architecture", level: "Proficient", percent: 85 },
      { name: "MongoDB & Mongoose", level: "Competent", percent: 78 },
      { name: "Authentication & Authorization (JWT)", level: "Competent", percent: 75 },
      { name: "Database Schema Modeling", level: "Competent", percent: 76 },
    ],
  },
  {
    title: "Tools & DevOps Workflow",
    description: "Essential development tooling, version control, and production deployment.",
    badge: "Proficient",
    skills: [
      { name: "Git & Version Control", level: "Advanced", percent: 90 },
      { name: "GitHub & Collaborative PRs", level: "Advanced", percent: 88 },
      { name: "VS Code & Developer Extensions", level: "Advanced", percent: 92 },
      { name: "Vercel & Cloud Deployments", level: "Proficient", percent: 86 },
      { name: "Postman API Testing", level: "Proficient", percent: 84 },
      { name: "npm / pnpm Package Management", level: "Proficient", percent: 88 },
    ],
  },
  {
    title: "Core Analytical Competencies",
    description: "Cognitive skills honed through engineering and high-stake banking operations.",
    badge: "Core Strength",
    skills: [
      { name: "Algorithmic Problem Solving", level: "Advanced", percent: 92 },
      { name: "Structural & Mathematical Logic", level: "Advanced", percent: 95 },
      { name: "High-Volume Data Accuracy", level: "Advanced", percent: 96 },
      { name: "Workflow & Pipeline Optimization", level: "Advanced", percent: 90 },
      { name: "High-Stress Execution & Resilience", level: "Advanced", percent: 94 },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Janata Bank PLC",
    role: "Senior Officer",
    period: "03/2025 – 03/2026",
    location: "Brahmanbaria, Bangladesh",
    description: [
      "Directed high-volume transaction operations exceeding 20M+ BDT daily with an uncompromising 100% computational system accuracy.",
      "Oversaw regulatory compliance, audit verification pipelines, and customer financial records reconciliation.",
      "Streamlined procedural bottlenecks across counter service and digital branch operations.",
    ],
    achievements: [
      "Maintained zero-variance computational reconciliation across all daily clearing cycles.",
      "Awarded commendation for meticulous execution during annual audit reviews.",
    ],
    skillsApplied: ["Computational System Accuracy", "Financial Data Pipelines", "Risk Assessment", "Audit Compliance"],
  },
  {
    company: "Premier Bank PLC",
    role: "Senior Officer (Fast-Tracked from MTO)",
    period: "02/2024 – 03/2025",
    location: "Dhaka, Bangladesh",
    description: [
      "Fast-tracked from Management Trainee Officer (MTO) to Senior Officer within 12 months in recognition of exceptional operational velocity and analytical capability.",
      "Navigated complex operational workflows and transaction pipelines within the enterprise Core Banking System (CBS).",
      "Coordinated cross-functional teams to troubleshoot CBS exceptions and optimize transaction throughput.",
    ],
    achievements: [
      "Promoted within one year based on operational leadership and technical proficiency in core systems.",
      "Optimized daily data entry and clearance workflows, reducing end-of-day settlement time.",
    ],
    skillsApplied: ["Core Banking Systems (CBS)", "Data Pipeline Operations", "Process Re-engineering", "Team Leadership"],
  },
  {
    company: "United Commercial Bank PLC",
    role: "Senior Officer",
    period: "03/2023 – 11/2023",
    location: "Dhaka, Bangladesh",
    description: [
      "Managed cross-functional enterprise workflows and applied quantitative data analytics to optimize resource planning.",
      "Processed interbank fund transfers, corporate client accounts, and real-time ledger entries.",
      "Developed internal spreadsheets and analytical models to forecast peak transactional loads.",
    ],
    achievements: [
      "Introduced analytical tracking templates that improved ledger reconciliation speed by 25%.",
      "Ensured zero audit queries across all managed portfolios.",
    ],
    skillsApplied: ["Quantitative Data Analytics", "Resource Planning", "Enterprise Workflows", "Client Relations"],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Professional Diploma in MERN Stack Web Development",
    institution: "Creative IT Institute",
    period: "03/2026 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Immersive 1-year professional engineering program dedicated to architecting end-to-end web applications. Currently mastering frontend architectures, modern reactive UI systems, and programmatic JavaScript, with deep upcoming modules in React.js, Node.js, Express, and MongoDB integration.",
    highlights: [
      "Building complete full-stack web ecosystems from scratch",
      "Advanced state management, component lifecycles, and asynchronous workflows",
      "RESTful API design and database modeling with MongoDB",
    ],
  },
  {
    degree: "B.Sc. in Civil Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    period: "2017 – 2022",
    location: "Dhaka, Bangladesh",
    description:
      "Graduated from Bangladesh's top-ranked engineering institution with a curriculum centered on high-level quantitative analysis, structural mechanics, algorithmic problem-solving, and resource optimization modeling.",
    highlights: [
      "Extensive coursework in numerical methods, calculus, differential equations, and data analysis",
      "Rigorous structural modeling and logical debugging of complex multi-variable systems",
      "Engineering mindset that prioritizes safety margins, code scalability, and systemic resilience",
    ],
  },
  {
    degree: "Full-Stack Web Development Bootcamp & Specializations",
    institution: "Programming Hero & Udemy",
    period: "2025 – Present",
    location: "Online / Practical",
    description:
      "Intensive self-directed and mentorship-backed mastery covering HTML5, CSS3 Grid/Flexbox, ES6+ JavaScript, React component patterns, REST APIs, and database fundamentals.",
    highlights: [
      "Completed 10+ real-world responsive projects",
      "Mastered Tailwind CSS v4, component modularization, and Git workflows",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "fitlog",
    title: "FitLog — Workout & Fitness Companion",
    subtitle: "Dark-themed fitness planner & workout logger built for serious lifters",
    category: "Full Stack / Nextjs App",
    image: "/fitlog.jpg",
    liveUrl: "https://fit-log-project-rho.vercel.app/",
    githubUrl: "https://github.com/shahjalalrafid-dev/fit-log-project",
    shortDescription:
      "A fast, dark-mode fitness tracking web application that allows gym enthusiasts to browse structured lift libraries, organize daily training routines, and calculate workout metrics.",
    longDescription:
      "FitLog is engineered as a clean, no-nonsense companion for weightlifters and fitness enthusiasts. Recognizing that friction in workout apps leads to abandoned logging, FitLog features a high-contrast dark aesthetic, instant muscle-group filtering, and a seamless one-click planner that stores targeted workouts. Visitors can track duration, estimated calories burned, and star ratings across compound movements like Barbell Bench Press, Deadlifts, Pull-Ups, and Squats.",
    techStack: ["Next.js (App Router)", "React 19", "Tailwind CSS", "JavaScript (ES6+)", "Lucide Icons", "LocalStorage API"],
    keyFeatures: [
      "12+ curated lifts covering all major muscle groups (Chest, Back, Legs, Shoulders, Arms, Core)",
      "Interactive 'My Plan' system with dynamic saved-workout counter and instant routine assembly",
      "Real-time workout duration and calorie expenditure estimations for every exercise",
      "Fully responsive mobile drawer navigation and fluid desktop header",
      "High-contrast dark UI palette engineered specifically for low-light gym environments",
    ],
    challenges: [
      {
        title: "State Persistence Across Client Navigation",
        description:
          "Challenge: Keeping user-selected workout plans synchronized when navigating between the library, detail views, and planner without causing page flickers or data loss.\nSolution: Implemented a lightweight persistent client-state layer using browser LocalStorage paired with React state callbacks, ensuring instant zero-latency updates.",
      },
      {
        title: "Next.js App Router Static Optimization",
        description:
          "Challenge: Achieving near-instant initial render times while delivering rich exercise imagery and dynamic interactive badges.\nSolution: Utilized Next.js Image optimization components and Turbopack bundling, reducing the initial load time to sub-second benchmarks.",
      },
    ],
    futureImprovements: [
      "User authentication via Firebase / NextAuth to enable cross-device cloud synchronization",
      "Integrated audio rest timer with customizable sound alerts between heavy sets",
      "Historical volume tracking charts and 1RM (one rep max) progression calculators",
      "Export workout summaries as downloadable PDF or image cards for social sharing",
    ],
  },
  {
    id: "bazardor",
    title: "BazarDor (বাজার দর) — Commodity Price Tracker",
    subtitle: "Real-time daily market price feed with price trend indicators",
    category: "Full Stack / Nextjs App",
    image: "/bazardor.jpg",
    liveUrl: "https://bazar-dor-project-psi.vercel.app/",
    githubUrl: "https://github.com/shahjalalrafid-dev/bazar-dor-project",
    shortDescription:
      "A comprehensive market pricing dashboard tracking daily essentials (rice, lentils, oil, produce) in Bangladesh with price shift indicators, Bengali localization, and category filtering.",
    longDescription:
      "BazarDor addresses a tangible daily challenge for everyday consumers in Bangladesh: navigating volatile commodity prices. The platform displays real-time pricing for 30+ everyday grocery staples, highlighting items that experienced price surges (with percentage red markers) and items that dropped in price (with percentage green markers). Built with a clean localized Bengali UI, users can quickly assess average rates, min-max ranges, and category breakdowns at a single glance.",
    techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "JavaScript (ES6+)", "Bengali Typography & L10n"],
    keyFeatures: [
      "Real-time commodity ticker displaying live price fluctuations and shift percentages",
      "Dynamic 'Price Increased' (আজ দাম বেড়েছে) vs. 'Price Decreased' (আজ দাম কমেছে) highlight grids",
      "30+ categorized staples including Rice (চাল), Lentils (ডাল), Oil (তেল), and Vegetables (সবজি)",
      "Native Bengali typography, calendar date synchronization, and intuitive price cards",
      "Fast client-side category filtering with responsive grid layout optimized for mobile screens",
    ],
    challenges: [
      {
        title: "Bengali Localization & Responsive Typography",
        description:
          "Challenge: Rendering Bengali font weights and numerical formats consistently without layout breaks across different mobile viewports.\nSolution: Configured custom CSS font subsets and fluid typographic scales, ensuring seamless readability on low-cost Android devices.",
      },
      {
        title: "Complex Multi-Tier Price Comparisons",
        description:
          "Challenge: Structuring data to dynamically calculate percentage shifts, min/max prices, and market averages without UI lag.\nSolution: Engineered modular data-processing helper functions that pre-compute price differentials before rendering cards.",
      },
    ],
    futureImprovements: [
      "Machine learning model to forecast seasonal price trends for seasonal produce",
      "Crowdsourced community price reporting with verification badges from different district markets",
      "Telegram and WhatsApp bot integration to send daily morning price alerts",
      "Price comparison graph visualizing 30-day and 90-day price trends",
    ],
  },
  {
    id: "foodcart",
    title: "Omnifood — Responsive AI Food-Cart Web Platform",
    subtitle: "Mobile-first responsive landing page and interactive food ordering system",
    category: "Frontend Web Application",
    image: "/omnifood.jpg",
    liveUrl: "https://shahjalalrafid-dev.github.io/foodcart-project/",
    githubUrl: "https://github.com/shahjalalrafid-dev/foodcart-project",
    shortDescription:
      "A pixel-perfect, mobile-first responsive landing page featuring smooth sticky navigation, interactive dietary filters, testimonials, and dynamic cart components.",
    longDescription:
      "Omnifood is a mobile-first digital product engineered to demonstrate pure mastery over core web fundamentals — semantic HTML5, modern CSS3 layout paradigms (Flexbox and Grid), and Vanilla JavaScript DOM manipulation. The application features a dynamic sticky header triggered by the Intersection Observer API, fluid scroll behavior, dietary category badges (Vegetarian, Vegan, Nut-free, Keto), nutrient score cards, customer testimonials, and interactive pricing plans.",
    techStack: ["HTML5 Semantic Elements", "Modern CSS3 (Grid & Flexbox)", "Vanilla JavaScript (ES6+)", "Intersection Observer API", "DOM Manipulation"],
    keyFeatures: [
      "Smooth sticky navigation that dynamically transitions as the user scrolls past the hero section",
      "Responsive hamburger navigation drawer built entirely with clean CSS and Vanilla JavaScript",
      "Interactive meal cards featuring dietary tags, calories, NutriScore, and star rating metrics",
      "Customer testimonial carousel and verified client review highlights",
      "Cross-browser tested and pixel-perfect across screens ranging from 320px mobile to ultra-wide displays",
    ],
    challenges: [
      {
        title: "Pure Vanilla JS Sticky Navigation & Smooth Scroll",
        description:
          "Challenge: Achieving jank-free, high-performance sticky navigation without heavy third-party JavaScript libraries.\nSolution: Implemented the native browser Intersection Observer API to observe hero section thresholds, achieving zero CPU overhead while scrolling.",
      },
      {
        title: "Cross-Device Layout Precision",
        description:
          "Challenge: Creating intricate multi-column meal grids that re-flow gracefully across small phones, tablets, and wide monitors.\nSolution: Built a robust CSS Grid architecture utilizing `clamp()`, `minmax()`, and auto-fit rules, completely eliminating horizontal overflow.",
      },
    ],
    futureImprovements: [
      "Migrate into a full Next.js & TypeScript application with live order checkout",
      "Integrate Stripe / SSLCommerz payment gateway for real transactions",
      "Add interactive meal customization (extra protein, dressing selection) with live price recalculation",
      "Implement real-time delivery GPS route simulation using Leaflet / Mapbox API",
    ],
  },
];
