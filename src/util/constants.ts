export const GITHUB_API = 'https://api.github.com/';
export const GITHUB_TOKEN = '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';

export const GET_REPOSITORIES = (username: string): string => {
  return `
 query  {
  user(login: "${username}") {
    repositories(first: 50, ownerAffiliations: OWNER, privacy: PUBLIC) {
      nodes {
        id
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
