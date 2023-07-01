import axios from 'axios';
const BASE_URL = 'https://goosetrack-backend-2lsp.onrender.com/api';

export const FetchReviews = async () => {
  const response = await axios.get(`${BASE_URL}/reviews`);
  return response.data;
};
