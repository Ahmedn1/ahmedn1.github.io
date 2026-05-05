export interface Project {
  title: string;
  domain: string;
  domainColor: string;
  description: string;
  highlights: string[];
  company?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AI Assistant for Drug Discovery',
    domain: 'Pharma / LLMs',
    domainColor: 'teal',
    description:
      'An ML/LLM-powered assistant for drug discovery scientists at BenchSci, accelerating research by surfacing relevant evidence from scientific literature and proprietary data.',
    highlights: [
      'LLM orchestration over complex, jargon-dense biomedical corpora',
      'Custom retrieval and ranking pipeline for regulated pharmaceutical data',
      'Production system used by scientists across major pharma companies',
    ],
    company: 'BenchSci',
    featured: true,
  },
  {
    title: 'MM NLG Suite',
    domain: 'NLP / NLG',
    domainColor: 'indigo',
    description:
      'One of the very first efficient neural content-writing systems in the market, built end-to-end at MarketMuse. Generated high-quality article drafts at scale for SEO content teams.',
    highlights: [
      'Built the training dataset by crawling and cleaning the entire web',
      'Trained a custom Transformer-based NLG model',
      'Designed domain-specific evaluation metrics for content quality',
      'Delivered full deployment pipeline and user interface',
    ],
    company: 'MarketMuse',
    featured: true,
  },
  {
    title: 'User Intent Classifier',
    domain: 'NLP / SEO',
    domainColor: 'violet',
    description:
      'A model to classify the search intent behind URLs and Google queries, enabling smarter content strategy recommendations for MarketMuse customers.',
    highlights: [
      'Custom labeling platform and annotation workflow',
      'Multi-class classification across navigational, informational, transactional, and commercial intents',
      'Deployed as a backend microservice serving real-time predictions',
    ],
    company: 'MarketMuse',
    featured: true,
  },
  {
    title: 'Credit Scoring for the Unbanked',
    domain: 'FinTech / ML',
    domainColor: 'emerald',
    description:
      'An alternative credit-score equivalent for populations without traditional banking history, using phone usage data, social-media signals, and transaction network graphs.',
    highlights: [
      'Graph-based feature engineering with networkx on transaction networks',
      'Combined heterogeneous data sources: telco, social, financial',
      'Provided financial access to previously unscoreable customers',
    ],
    company: 'PayMob Solutions',
  },
  {
    title: 'Customized Promos Engine',
    domain: 'FinTech / ML',
    domainColor: 'amber',
    description:
      'A personalization engine that generated targeted promotional offers for each customer based on their transaction history and behavioral cluster.',
    highlights: [
      'Clustering-based customer segmentation',
      'Per-user offer generation using historical behavior patterns',
      'Measurable uplift in customer retention metrics',
    ],
    company: 'PayMob Solutions',
  },
  {
    title: 'Automatic Inventory System (CV)',
    domain: 'Computer Vision',
    domainColor: 'sky',
    description:
      'A computer vision system that autonomously creates and manages inventory from supermarket shelf images, eliminating manual stock counting.',
    highlights: [
      'Object detection and product recognition on shelf imagery',
      'Automated count and SKU tracking pipeline',
      'Designed for real-time deployment on retail hardware',
    ],
  },
  {
    title: 'Twasol — Assistive CV & Speech System',
    domain: 'Computer Vision / HCI',
    domainColor: 'rose',
    description:
      'A computer vision and speech recognition system giving quadriplegic patients full control of their computers, smart home, and telephone via head movements and voice commands.',
    highlights: [
      'Real-time head-movement tracking via computer vision for cursor and device control',
      'Speech recognition integration for phone calls and system navigation',
      '1st Place, Microsoft Imagine Cup Egypt 2012; Top 20 worldwide',
    ],
    featured: true,
  },
  {
    title: 'Online Debate Stance Classifier',
    domain: 'NLP / Research',
    domainColor: 'purple',
    description:
      'A zero-shot model that identifies the stance (pro/con) and underlying reasoning within sentences of online debate posts, without requiring labeled training examples.',
    highlights: [
      'Zero-shot generalization across debate topics',
      'Stance + reason extraction as a structured prediction task',
      'Published as a research project in the NLP community',
    ],
  },
];
