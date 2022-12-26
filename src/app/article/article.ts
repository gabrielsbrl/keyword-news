export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: any;
    name: string;
  },
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticlesResponse {
  articles: Array<Article>;
  status: string;
  totalResults: number;
}
