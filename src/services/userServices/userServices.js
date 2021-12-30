import api from '../api';

const login = async (username, password) => {
  const data = { username, password };
  return api.post(api.url.login, data).then(res => res)
}

const register = async (data) => {
  return api.post(api.url.users, data).then(res => res)
}

const getUser = async () => {
  return api.get(api.url.users).then(res => res)
}

const getUsersById = async (id) => {
  return api.get(`${api.url.users}/${id}`).then(res => res)
}

const updateUser = async (id, data) => {
  return api.put(`${api.url.users}/${id}`, data).then(res => res)
}

const userServices = {
  login, getUser, register, getUsersById, updateUser
}

export default userServices;