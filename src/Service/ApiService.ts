// src/services/ApiService.ts
import axios from 'axios';

const signUp = 'https://reqres.in/api/register';
const signIn = 'https://reqres.in/api/login';


const ApiService = {
  signIn: async (email: string, password: string,) => {
    try {
      const response = await axios.post(`${signIn}/login`, { email, password });
      return response.data;
    } catch (error:any) {
      throw error.response?.data || error.message;
    }
  },

  signUp: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${signUp}/register`, { email, password });
      return response.data;
    } catch (error:any) {
      throw error.response?.data || error.message;
    }
  },

  fetchUserData: async (userId: number) => {
    try {
      const response = await axios.get(`${signUp}/users/${userId}`);
      return response.data;
    } catch (error:any) {
      throw error.response?.data || error.message;
    }
  },
};

export default ApiService;
