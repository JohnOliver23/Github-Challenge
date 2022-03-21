import axios from 'axios';
import { GET_REPOSITORIES } from 'util/constants';

const { REACT_APP_GITHUB_API, REACT_APP_GITHUB_TOKEN } = process.env;

const api = axios.create({
  baseURL: REACT_APP_GITHUB_API,
  headers: {
    Authorization: `bearer ${REACT_APP_GITHUB_TOKEN}`,
  },
});

export const getRepositories = async (name: string) => {
  const result = await api
    .post('/graphql', { query: GET_REPOSITORIES(name) })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response;
    });
  return result;
};
