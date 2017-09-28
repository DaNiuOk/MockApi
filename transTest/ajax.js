var axios = require('axios');

axios.defaults.baseURL = 'https://plusapi.mogoroom.com/mogoroom-bd';
axios.defaults.timeout = 20000;

axios.interceptors.request.use(function (config) {
  config.headers = {};
  return config;
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

module.exports = axios
