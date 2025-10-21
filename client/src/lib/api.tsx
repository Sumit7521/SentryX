// lib/api.js
import axios from 'axios';

export const fetchUsers = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return res.data;
};
