import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  token: localStorage.getItem('token'),
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
  forgotPassword: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('userInfo', JSON.stringify(action.payload.userInfo));
      // fetch products was ordered by this user 
      localStorage.setItem('orders', JSON.stringify({
        products: [],
        total: 0,
      }))
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('orders')
      state.isLoggedIn = false;
      state.token = null;
      state.userInfo = null;
    },
    retainPassword: (state) => {
      state.forgotPassword = true;
    },
    updateUser: (state, action) => {
      localStorage.setItem('userInfo', JSON.stringify({
        ...state.userInfo,
        ...action.payload.userInfo
      }));
      state.userInfo = {
        ...state.userInfo,
        ...action.payload.userInfo
      }
    }
  },
})

const getAuth = (state) => state.auth.isLoggedIn;
const getUserInfo = (state) => state?.auth?.userInfo;
const getPassword = (state) => state.auth.forgotPassword

export const { login, logout, retainPassword, updateUser } = authSlice.actions;
export { getAuth, getUserInfo, getPassword };
export default authSlice.reducer