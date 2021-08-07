import axios from 'axios';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

export default { setToken };