import axios from 'axios';

let base = '';
// 登录
const requestLogin = (params) => { 

  return axios
          .post(`${base}/api/login`, params)
          // .then(res => res.data); 

};

const requestSetPassword = (params) => {
  return axios
          .post(`${base}/api/setPassword`, params)
          .then(res => res.data);
};

// table list
const requestTable = (params) => { 

  return axios
          .post(`${base}/api/table`, params)
          .then(res => res.data);

};

export {
  requestLogin,
  requestTable,
  requestSetPassword
}
