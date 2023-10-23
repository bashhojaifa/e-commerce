import axios from "axios";

const BASE_URL = "https://repliq/";
const token = "token"; // Replace with  token
// Set headers
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const createAdminUser = (data) => {
  axios
    .post(`${BASE_URL}`, data, { config })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Register = (data) => {
  axios
    .post(`${BASE_URL}/register`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const Login = (data) => {
  axios
    .post(`${BASE_URL}/login`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
