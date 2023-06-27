import axios from 'axios';

export const verifyUser = async verificationToken => {
  try {
    await axios.get(`/auth/verify/${verificationToken}`);
  } catch (error) {
    console.warn(error);
  }
};
