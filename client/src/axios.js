import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

axiosInstance.interceptors.response.use(function (res) {
  const token = res.headers['Authorization'];
  if (token !== undefined && token.match('Bearer')) {
    console.log(token);
  }
});

export default axiosInstance;
