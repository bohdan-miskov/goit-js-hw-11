import axios from 'axios';
require('dotenv').config();

const searchParams = {
  key: process.env.API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export default function imageAPIRequest(imageName) {
  return axios.get(`https://pixabay.com/api/`, {
    params: {
      q: imageName,
      ...searchParams,
    },
  });
}
