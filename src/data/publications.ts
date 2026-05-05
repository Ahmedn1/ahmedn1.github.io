export interface Publication {
  title: string;
  venue: string;
  year?: string;
  link?: string;
  type: 'paper' | 'article';
}

export const publications: Publication[] = [
  {
    title:
      'GD2 and GD3 gangliosides as diagnostic biomarkers for all stages and subtypes of epithelial ovarian cancer',
    venue: 'Frontiers in Oncology',
    year: '2023',
    link: 'https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2023.1134763/full',
    type: 'paper',
  },
  {
    title: 'Active Learning Survey',
    venue: 'ResearchGate',
    link: 'https://www.researchgate.net/profile/Ahmed_Dawod',
    type: 'paper',
  },
  {
    title: 'Skypekit.NET',
    venue: 'GitHub',
    link: 'https://github.com/Ahmedn1/SkypeNET',
    type: 'article',
  },
];
