import axios from 'axios';
import { GITHUB_API, GET_REPOSITORIES, GITHUB_TOKEN } from 'util/constants';

const api = axios.create({
  baseURL: GITHUB_API,
  headers: {
    Authorization: `bearer ${GITHUB_TOKEN}`,
  },
});

export const getRepositories = async (name: string) => {
  const result = await api
    .post('graphql', { query: GET_REPOSITORIES(name) })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response;
    });
  return result;
};
