import api from '../api';

const list = () => {
  return api.get(api.url.products);
}

const getLimit = (limit) => {
  const queryString = `?limit=${limit}`;
  return api.get(`${api.url.products}${queryString}`)
}

const sort = (sort) => {
  const queryString = `?sort=${sort}`;
  return api.get(`${api.url.products}${queryString}`)
}

const getCategory = (category) => {
  return api.get(`${api.url.products}/category/${category}`)
}

const getSingleProducts = (id) => {
  return api.get(`${api.url.products}/${id}`);
}

const productsServices = {
  list, getLimit, sort, getCategory, getSingleProducts
}

export default productsServices;