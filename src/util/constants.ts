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
