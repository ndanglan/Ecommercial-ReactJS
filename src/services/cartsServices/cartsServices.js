import api from '../api';

const list = () => {
  return api.get(api.url.carts)
}

const getSingleCart = (id) => {
  return api.get(`${api.url.carts}/${id}`);
}

const getUserCart = (id) => {
  return api.get(`${api.url.carts}/user/${id}`)
}

const addNewCart = (data) => {
  return api.post(api.url.carts, data)
}

const deleteCart = (id) => {
  return api.delete(`${api.url.carts}/${id}`)
}

const updateCart = (id, data) => {
  return api.put(`${api.url.carts}/${id}`, data)
}

const cartsServices = {
  list, getSingleCart, getUserCart, addNewCart, deleteCart, updateCart
}

export default cartsServices