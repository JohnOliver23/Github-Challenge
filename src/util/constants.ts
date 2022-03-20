export const GITHUB_API = 'https://api.github.com/';
export const GITHUB_TOKEN = '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';

export const GET_REPOSITORIES = (username: string): string => {
  return `
 query  {
  user(login: "${username}") {
    repositories(first: 50, ownerAffiliations: OWNER, privacy: PUBLIC) {
      nodes {
        name
        url
        description
        createdAt
        stargazers {
          totalCount
        }
        forkCount
        primaryLanguage {
          name
        }
      }
    }
  }
}
 `;
};
