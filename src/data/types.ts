export interface WeekMeta {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  topics: string[];
  shortDesc: string;
  pdfUrl: string;
}

export interface CodeBlock {
  lang: 'java' | 'sql' | 'terminal' | 'output';
  label?: string;
  code: string;
}

export interface Screenshot {
  src: string;
  caption: string;
  alt: string;
}

export interface Step {
  num: number;
  title?: string;
  description: string;
  code?: CodeBlock;
  screenshot?: Screenshot;
  extra?: CodeBlock;
}

export interface Task {
  title: string;
  program?: string;
  javaCode?: CodeBlock;
  output?: string;
  verification?: string;
  screenshots?: Screenshot[];
}
