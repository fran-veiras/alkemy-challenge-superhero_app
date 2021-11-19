import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios.post('http://challenge-react.alkemy.org/', {
      email: email,
      password: password,
    });
    let data = {
      status: res.status,
      message: res.data,
    };
    return data;
  } catch (error) {
    let data = {
      status: error.response.status,
      message: error.response.data,
    };
    return data;
  }
};
