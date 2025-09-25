import api from './api.js';

export const userService = {
  getProfile: async () => {
    const res = await api.get('/users/profile');
    return res.data;
  },
  updateProfile: async (payload) => {
    const res = await api.put('/users/profile', payload);
    return res.data;
  },
  changePassword: async (payload) => {
    const res = await api.put('/users/change-password', payload);
    return res.data;
  }
};


