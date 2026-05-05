export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'academic' | 'freelance';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  note?: string;
}

export interface Award {
  title: string;
  year?: string;
}

export const roles: Role[] = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'Shopify',
    location: 'Montreal, Canada (Remote)',
    period: 'July 2025 – Present',
    current: true,
    type: 'full-time',
    bullets: [
      'Own and lead large-scale recommendation projects for the Shop app, serving millions of users',
      'Collaborate across teams and stakeholders to design and ship ML-driven features',
      'Mentor junior engineers and support their career development',
      'Build AI-assisted tooling including agents and MCP servers to accelerate team velocity',
    ],
  },
  {
    title: 'Senior Machine Learning Engineer',
    company: 'BenchSci',
    location: 'Montreal, Canada (Remote)',
    period: 'October 2022 – July 2025',
    type: 'full-time',
    bullets: [
      'R&D with ML models and LLMs in the pharmaceutical domain',
      'Own, plan, and manage projects and services end-to-end',
      'Lead multi-disciplinary teams as Directly Responsible Individual (DRI) on various initiatives',
      'Consistently one of the highest performers per annual performance reviews',
      'Engage stakeholders to set expectations, drive planning, and present results',
    ],
  },
  {
    title: 'Machine Learning Research Engineer',
    company: 'MarketMuse',
    location: 'Montreal, Canada (Remote)',
    period: 'January 2019 – October 2022',
    type: 'full-time',
    bullets: [
      'Built one of the very first efficient NLG content writers in the market: created the dataset from the entire web, built a custom Transformers model, designed custom evaluation metrics, and delivered full deployment & UI',
      'Built a search user-intent classifier with a proprietary data-labeling platform',
      'Built information extraction and question-answering tools to construct knowledge banks from the web',
      'Built and maintained backend services delivering ML products at scale',
      'Owned, led, planned, and managed projects and services',
    ],
  },
  {
    title: 'Data Science Consultant',
    company: 'AOA Dx',
    location: 'Montreal, Canada (Remote)',
    period: 'August 2021 – September 2022',
    type: 'contract',
    bullets: [
      'Provided data science and modelling expertise for ovarian cancer diagnosis research',
      'Co-authored peer-reviewed publication in Frontiers in Oncology on GD2/GD3 gangliosides as diagnostic biomarkers for epithelial ovarian cancer',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'PayMob Solutions',
    location: 'Cairo, Egypt (Remote)',
    period: 'August 2017 – April 2019',
    type: 'full-time',
    bullets: [
      'Built an alternative credit-scoring system for the unbanked population using phone data, social-media signals, and network transaction history',
      'Analyzed millions of daily financial data points to drive business decisions',
      'Modelled customer churn ("death events") and designed targeted offers to increase retention',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Mansoura University – CS Department',
    location: 'Mansoura, Egypt',
    period: '2012 – 2017',
    type: 'academic',
    bullets: [
      'Instructed programming labs for undergraduate CS students',
      'Led ML research groups that generated revenue for the department',
      'Mentored high-potential students whose grad projects won national competitions',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Freelancer.com',
    location: 'Online',
    period: '2009 – 2017',
    type: 'freelance',
    bullets: [
      'Delivered diverse software projects across desktop, web, and mobile platforms',
      'Maintained a 4.9 / 5 reputation with a 100 % On-Time rating',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science (Machine Learning Focus)',
    institution: 'Purdue University',
    location: 'Indiana, USA',
    year: '2016',
    note: 'Fulbright Foreign Student Program recipient',
  },
  {
    degree: 'Pre-Masters, Computer Science',
    institution: 'Mansoura University',
    location: 'Mansoura, Egypt',
    year: '2013',
  },
  {
    degree: 'B.S. Computer Science',
    institution: 'Mansoura University',
    location: 'Mansoura, Egypt',
    year: '2012',
    note: 'Graduated top of class',
  },
];

export const awards: Award[] = [
  { title: 'Fulbright Foreign Student Program', year: '2015' },
  { title: 'Microsoft Imagine Cup Egypt — 1st Place', year: '2012' },
  { title: 'Top of Undergraduate Class', year: '2012' },
];
