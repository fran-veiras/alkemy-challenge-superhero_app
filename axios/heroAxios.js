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

export const getHeroe = (query) => {
  return new Promise((resolve) => {
    axios
      .get(
        `https://www.superheroapi.com/api.php/2346221928841902/search/${query}`
      )
      .then((res) => {
        resolve(res.data.results);
      })
      .catch((err) => {});
  });
};

export const getHeroesIds = (id) => {
  return new Promise((resolve) => {
    axios
      .get(`https://www.superheroapi.com/api.php/2346221928841902/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {});
  });
};
