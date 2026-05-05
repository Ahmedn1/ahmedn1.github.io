export interface Talk {
  title: string;
  event: string;
  date: string;
  abstract: string;
  link?: string;
}

export const talks: Talk[] = [
  {
    title: 'Navigating complex data challenges with AI where LLMs fail',
    event: 'xTelliGent Two: AI in GxP 2025 Summit',
    date: 'May 28, 2025',
    abstract:
      'A deep dive into the real-world limitations of large language models in specialized and complex data environments, particularly in biomedical research. While LLMs excel at summarization, Q&A, and document retrieval, they struggle with messy, jargon-laden, or confidential data. This session presents practical architectures and hybrid approaches for navigating those gaps.',
  },
  {
    title: 'Big Data in the NLG Domain',
    event: 'The Tesseract Academy Conference',
    date: 'March 2, 2022',
    abstract:
      'An exploration of how to handle big data challenges in NLG applications, with a focus on the practical engineering required as LLM-based generation scaled up — including dataset curation, quality filtering, and evaluation at web scale.',
  },
];
