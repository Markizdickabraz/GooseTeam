import axios from 'axios';
const BASE_URL = 'https://goosetrack-backend-2lsp.onrender.com/api';

// export const fetchRewievs = createAsyncThunk(
//   'reviews/fetchReviews',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/reviews');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const FeatchRewievs = async () => {
  const responce = await axios.get(`${BASE_URL}/reviews`);
  console.log(responce.data);
  return responce.data;
};
