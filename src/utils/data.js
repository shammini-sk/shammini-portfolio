// ============================================================
// PORTFOLIO DATA – All content pulled from Shammini's resume
// ============================================================

export const meta = {
  name: 'Shammini S K',
  role: 'MCA Student',
  email: 'shammini.sk@gmail.com',
  phone: '+91 63838 33408',
  linkedin: 'https://linkedin.com/in/shammini-sk-636939309',
  github: 'https://github.com/shammini-sk', // update when available
  location: 'Chennai, India',
  summary:
    'Recent MCA graduate student with a strong foundation in software development, IoT systems, and AI-driven solutions. Demonstrated ability to apply academic knowledge to real-world challenges through impactful project work and hackathon participation.',
}

export const typewriterWords = [
  'AI/ML Developer',
  'IoT Engineer',
  'Software Engineer',
  'Hackathon Finalist',
  'Problem Solver',
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Easwari Engineering College',
    period: '2024 – 2026',
    cgpa: '9.21',
    location: 'Chennai, India',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Meenakshi College for Women',
    period: '2021 – 2024',
    cgpa: '8.5',
    location: 'Chennai, India',
  },
]

export const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'JavaScript'], level: 85 },
  { category: 'AI / ML', items: ['Machine Learning', 'Random Forest', 'Predictive Maintenance', 'Explainable AI (XAI)'], level: 80 },
  { category: 'Automation', items: ['n8n Workflow Automation', 'API Integration', 'Event-driven Automation'], level: 75 },
  { category: 'IoT', items: ['ESP8266', 'MQ-5 Sensors', 'Real-time Monitoring', 'Embedded Systems'], level: 78 },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL'], level: 72 },
  { category: 'Dev Tools', items: ['VS Code', 'Git', 'Eclipse', 'Google Colab'], level: 85 },
]

export const projects = [
  {
    id: 'iot-ai-monitoring',
    title: 'IoT & AI Equipment Monitoring',
    subtitle: 'Smart India Hackathon 2025 – National Finalist',
    tagline: 'Real-time AI-powered monitoring for training laboratory equipment',
    badge: '🏆 SIH 2025 Finalist',
    badgeColor: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400',
    description:
      'Architected a real-time monitoring system for training laboratory equipment using IoT sensors and AI-based analytics to maximize utilization and uptime. Built with explainability in mind so lab managers get actionable, transparent insights.',
    highlights: [
      'Random Forest ML pipeline for predictive maintenance',
      'Explainable AI (XAI) for transparent decision-making',
      'Real-time IoT sensor data ingestion',
      'Early fault detection to prevent costly breakdowns',
      'National-level presentation to Ministry of Education officials',
    ],
    techStack: ['Python', 'Random Forest', 'XAI/SHAP', 'IoT Sensors', 'Machine Learning', 'Data Analytics'],
    architecture: [
      { step: '01', label: 'Data Collection', desc: 'IoT sensors capture equipment metrics in real time' },
      { step: '02', label: 'ML Pipeline', desc: 'Random Forest model detects anomalies and predicts failures' },
      { step: '03', label: 'XAI Layer', desc: 'SHAP values translate model output into human-readable insights' },
      { step: '04', label: 'Dashboard', desc: 'Lab managers receive actionable alerts and maintenance schedules' },
    ],
    screenshots: ['/screenshorts/ss1.jfif', '/screenshorts/ss2.jfif' , '/screenshorts/ss3.jfif'],
    color: 'from-azure-600 to-blue-700',
    accentColor: '#0ea5e9',
    icon: '⚡',
    github: 'https://github.com/shammini-sk',
    demo: null,
  },
  {
    id: 'nagrik-saathi',
    title: 'Nagrik Saathi',
    subtitle: 'Crowdsourced Civic Issue Reporting – Internal SIH Shortlisted',
    tagline: 'Citizen-centric mobile app for reporting and resolving civic issues',
    badge: '✅ SIH Shortlisted',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    description:
      'Designed a citizen-centric mobile application enabling residents to report, track, and resolve public civic issues including sanitation, roads, and utilities for Jharkhand state. Integrated n8n-based workflow automation to dramatically reduce manual coordination effort.',
    highlights: [
      'Citizens can report, track & resolve public issues',
      'Covers sanitation, roads, utilities & more',
      'n8n workflow automation for intelligent routing',
      'Inter-department notifications & status updates',
      'Shortlisted for Smart India Hackathon evaluation',
    ],
    techStack: ['Mobile App', 'n8n Automation', 'Backend Development', 'API Integration', 'Workflow Automation', 'JavaScript'],
    architecture: [
      { step: '01', label: 'Report', desc: 'Citizens submit geo-tagged civic issues via the mobile app' },
      { step: '02', label: 'Route', desc: 'n8n automation classifies and routes issues to the right department' },
      { step: '03', label: 'Track', desc: 'Real-time status updates keep citizens informed of progress' },
      { step: '04', label: 'Resolve', desc: 'Departments close issues; data feeds analytics for city planning' },
    ],
    screenshots: ['/screenshorts/pj1.jfif', '/screenshorts/pj2.jfif', '/screenshorts/pj3.jfif' , '/screenshorts/pj4.jfif'],
    color: 'from-emerald-600 to-teal-700',
    accentColor: '#10b981',
    icon: '🏙️',
    github: 'https://github.com/shammini-sk',
    demo: null,
  },
  {
    id: 'gas-leakage',
    title: 'IoT Gas Leakage Detection',
    subtitle: 'Academic Project – Safety-Critical IoT System',
    tagline: 'Multi-channel LPG leakage detection for residential & industrial safety',
    badge: '🔬 Academic Project',
    badgeColor: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400',
    description:
      'Engineered an IoT-based LPG leakage detection system using MQ-5 gas sensors and an ESP8266 Wi-Fi module for real-time hazard monitoring with a multi-channel alert mechanism to ensure immediate response upon gas detection.',
    highlights: [
      'MQ-5 gas sensor + ESP8266 Wi-Fi module',
      'Real-time hazard monitoring & threshold alerts',
      'Multi-channel: buzzer + mobile push + email',
      'Proactive early detection reduces accident risk',
      'Deployable for both residential & industrial use',
    ],
    techStack: ['ESP8266', 'MQ-5 Sensor', 'Arduino/C++', 'IoT', 'Embedded Systems', 'Push Notifications'],
    architecture: [
      { step: '01', label: 'Sense', desc: 'MQ-5 sensor continuously monitors LPG concentration levels' },
      { step: '02', label: 'Process', desc: 'ESP8266 compares readings against safety thresholds' },
      { step: '03', label: 'Alert', desc: 'Triggers buzzer, push notification, and email simultaneously' },
      { step: '04', label: 'Log', desc: 'Events are logged for safety audits and analytics' },
    ],
    screenshots: [],
    color: 'from-violet-600 to-purple-700',
    accentColor: '#8b5cf6',
    icon: '🛡️',
    github: 'https://github.com/shammini-sk',
    demo: null,
  },
]

export const internship = {
  role: 'Internship Trainee',
  company: 'Easwari Engineering College – Industry Collaboration (TVS)',
  period: '2026 | 3 Months',
  points: [
    'Assisted in scheduling and operational planning for an industrial plant project in collaboration with TVS Company.',
    'Contributed to data collection, workflow monitoring, and process documentation to support efficient plant operations.',
    'Gained hands-on exposure to project planning methodologies and industrial resource management practices.',
    'Collaborated with a multidisciplinary team to improve scheduling accuracy and optimize task allocation workflows.',
  ],
}

export const achievements = [
  {
    title: 'Smart India Hackathon 2025 – National Finalist',
    description:
      'Qualified as a national-level finalist for SIH 2025 with the IoT & AI-Enabled Skill Training Equipment Monitoring project, evaluated by Ministry of Education officials.',
    icon: '🏆',
    color: 'from-yellow-500/10 to-amber-500/10 border-yellow-500/20',
  },
  {
    title: 'NPTEL – Internet of Things (IoT)',
    description: 'Completed the IoT certification course offered by IIT Madras through the NPTEL platform.',
    icon: '📜',
    color: 'from-azure-500/10 to-blue-500/10 border-azure-500/20',
  },
  {
    title: 'Internal SIH Hackathon – Shortlisted',
    description:
      'Nagrik Saathi project was shortlisted from the internal hackathon for further Smart India Hackathon evaluation.',
    icon: '✅',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
  },
]
