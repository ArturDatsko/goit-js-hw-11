import axios from 'axios';
import _ from 'lodash';

const key = '39913596-def536687c884d5328526f8b1';

const search = (query, page) => {
  const params = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });
  return axios({
    method: 'get',
    baseURL: 'https://pixabay.com/api',
    url: `?${params.toString()}`,
  })
    .then(response => {
      if (!response.data) return new Error(response.status);
      return response;
    })
    .catch(error => console.log(error));
};

module.exports = {
  search,
};
