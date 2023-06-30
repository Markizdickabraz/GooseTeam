import axios from 'axios';
const BASE_URL = 'https://goosetrack-backend-2lsp.onrender.com/api';

export const FeatchRewievs = async () => {
  const responce = await axios.get(`${BASE_URL}/reviews`);
  return responce.data;
};
