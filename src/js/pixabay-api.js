import axios from 'axios';

const searchParams = {
  key: import.meta.env.VITE_API_KEY,
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
