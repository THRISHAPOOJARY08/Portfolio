import { ProjectItem, SkillCategory, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Thrisha',
  role: 'Computer Science & Engineering Student',
  institution: "Alva's Institute of Engineering and Technology",
  tagline: 'Building practical software solutions with curiosity, creativity and a passion for learning.',
  email: 'thrishapoojary480@gmail.com',
  github: 'https://github.com/THRISHAPOOJARY08',
  linkedin: 'https://www.linkedin.com/in/thrisha-poojary-117a11331',
  cgpa: '9.18 / 10',
  currentYear: '2024 – Present',
  bio: [
    "I am a Computer Science & Engineering undergraduate at Alva's Institute of Engineering and Technology, dedicated to crafting reliable, high-performance software systems and exploring computational problem-solving.",
    "My focus centers on foundational computer science principles: algorithmic efficiency, structured data modeling, and practical full-stack application development. Whether architecting database-driven inventory platforms or analyzing predictive academic thresholds, I approach engineering with analytical rigor and clean code discipline."
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming foundations for system logic, algorithms, and applications',
    skills: [
      {
        name: 'Java',
        level: 'Object-Oriented Design',
        details: 'Enterprise logic, inheritance patterns, JVM architecture, Collections framework'
      },
      {
        name: 'Python',
        level: 'Data & Scripting',
        details: 'Analytical scripts, data structures, automation pipelines, algorithmic prototyping'
      },
      {
        name: 'C',
        level: 'Systems & Memory',
        details: 'Pointers, low-level memory allocation, procedural logic, core fundamentals'
      },
      {
        name: 'C++',
        level: 'High-Performance & STL',
        details: 'Competitive problem-solving, Standard Template Library (STL), memory management'
      }
    ]
  },
  {
    title: 'Web Technologies',
    description: 'Modern markup, styling, and interactive scripting for responsive web interfaces',
    skills: [
      {
        name: 'HTML5',
        level: 'Semantic Structure',
        details: 'Accessible layouts, document object hierarchy, modern semantic standards'
      },
      {
        name: 'CSS3',
        level: 'Responsive Design',
        details: 'Flexbox, CSS Grid layouts, glassmorphism, animations, adaptive media queries'
      },
      {
        name: 'JavaScript',
        level: 'Dynamic Interactivity',
        details: 'ES6+ standards, DOM manipulation, asynchronous programming, event-driven architecture'
      }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, schema design, and structured query optimization',
    skills: [
      {
        name: 'MySQL',
        level: 'Relational Management',
        details: 'ACID transactions, indexed tables, multi-table JOINs, normalization'
      },
      {
        name: 'SQL',
        level: 'Structured Querying',
        details: 'Complex filtering, aggregate grouping, stored procedures, schema migrations'
      }
    ]
  },
  {
    title: 'Core Fundamentals',
    description: 'Foundational algorithmic concepts driving computational efficiency',
    skills: [
      {
        name: 'Data Structures',
        level: 'Space-Time Optimized',
        details: 'Trees, Graphs, Linked Lists, Hash Tables, Stacks, Queues, Heaps'
      },
      {
        name: 'Algorithms',
        level: 'Problem Solving',
        details: 'Sorting & Searching, Dynamic Programming, Greedy approaches, Graph Traversals'
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'farmiq',
    number: '01',
    name: 'FarmIQ',
    tagline: 'Intelligent Agricultural Network & Crop Advisory Platform',
    overview: 'A smart software application bridging agronomic data with digital intelligence to monitor environmental metrics, recommend optimized crop cycles, and assist farmers in data-driven decisions.',
    technologies: ['Python', 'JavaScript', 'HTML/CSS', 'MySQL', 'Data Structures'],
    features: [
      'Telemetry ingestion interface for monitoring moisture, temperature, and soil attributes',
      'Data-driven crop advisory heuristics recommending optimal seasonal planting windows',
      'Interactive crop yield dashboards and harvest tracking records',
      'Normalized relational storage designed for historical climate and crop performance records'
    ],
    metrics: [
      { label: 'Domain', value: 'AgriTech' },
      { label: 'Analysis Speed', value: 'Real-time' },
      { label: 'Target', value: 'Yield Optimization' }
    ],
    architecture: 'Modular architecture separating data ingestion services from decision rules, coupled with relational MySQL schema design for persistent historical crop metrics.',
    challenges: 'Designing relational normalization to reconcile varying soil types, seasonal crops, and climate parameters into actionable guidance.',
    category: 'Smart Agriculture',
    accentColor: '#10b981'
  },
  {
    id: 'product-management-system',
    number: '02',
    name: 'Product Management System',
    tagline: 'Transactional Inventory Catalog & Relational Stock Engine',
    overview: 'An enterprise product lifecycle and inventory management system delivering reliable CRUD operations, automated low-stock warnings, and structured catalog audit trails.',
    technologies: ['Java', 'MySQL', 'SQL', 'HTML/CSS', 'Algorithms'],
    features: [
      'Transactional inventory ledger ensuring atomic stock updates without race conditions',
      'Dynamic multi-attribute product catalog indexing and instantaneous search',
      'Automated stock threshold alerting to prevent supply chain bottlenecks',
      'Normalized relational schema with referential integrity constraints and audit logs'
    ],
    metrics: [
      { label: 'Query Performance', value: '<20ms' },
      { label: 'Integrity', value: 'ACID Compliant' },
      { label: 'Pattern', value: 'MVC Architecture' }
    ],
    architecture: 'Structured Java backend service layer connecting through JDBC to a normalized MySQL relational engine, with clean boundary validation and error handling.',
    challenges: 'Ensuring atomic transaction safety during simultaneous stock deduction operations and maintaining strict referential consistency.',
    category: 'Enterprise Systems',
    accentColor: '#38bdf8'
  },
  {
    id: 'student-attendance-analyzer',
    number: '03',
    name: 'Student Attendance Shortage Analyzer',
    tagline: 'Predictive Academic Attendance & Threshold Deficit Analyzer',
    overview: 'An analytical utility calculating real-time attendance trends, simulating minimum cutoff compliance (75%), and projecting precise class counts needed to regain academic eligibility.',
    technologies: ['Python', 'C++', 'Data Structures', 'Algorithms', 'SQL'],
    features: [
      'Real-time shortfall computation against regulatory institutional minimum percentages',
      'Predictive recovery simulator calculating mandatory consecutive classes to regain compliance',
      'Risk-stratified cohort filtering highlighting critical, moderate, and secure attendance levels',
      'Structured reporting pipeline providing exportable tabular data for academic coordinators'
    ],
    metrics: [
      { label: 'Threshold', value: '75% Cutoff' },
      { label: 'Simulation', value: 'Dynamic Recovery' },
      { label: 'Complexity', value: 'O(N) Processing' }
    ],
    architecture: 'Mathematical deficit formula engine encapsulated with structured algorithmic models, enabling rapid batch evaluation of multi-course student rosters.',
    challenges: 'Formulating the predictive recovery logic when course schedules have variable remaining hours and fluctuating holiday calendars.',
    category: 'Academic Analytics',
    accentColor: '#818cf8'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. — Computer Science & Engineering',
    institution: "Alva's Institute of Engineering and Technology",
    period: '2024 – Present',
    score: 'CGPA: 9.18 / 10',
    current: true,
    highlights: [
      'Consistent academic excellence with a 9.18 CGPA in core engineering disciplines',
      'Active focus on algorithmic problem solving, software engineering, and database systems',
      'Hands-on implementation of system design, computer architectures, and data structures'
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java/C++)',
      'Database Management Systems (MySQL)',
      'Computer System Architecture',
      'Discrete Mathematics & Logic'
    ]
  },
  {
    degree: 'Pre-University Education (Science / PCMB)',
    institution: 'Department of Pre-University Education',
    period: 'Completed with Distinction',
    score: 'Distinction',
    highlights: [
      'Rigorous foundation in Mathematics, Physics, Chemistry, and Logic',
      'Analytical foundation fostering computational thinking and problem decomposition'
    ]
  }
];
