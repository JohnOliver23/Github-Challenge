export interface IRepository {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  forkCount: number;
  primaryLanguage: {
    name: string;
  };
  stargazers: {
    totalCount: number;
  };
  url: string;
}
