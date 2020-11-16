import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID AfpyCUdZnJ9cQYXZNP_IiZj5bT8W741r7mBiq8h3n7Y',
  },
});
