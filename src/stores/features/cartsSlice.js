import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || {
    products: [],
    total: 0
  },
}

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    add: (state, action) => {
      const alreadyExists = state?.orders?.products?.find(item => item["_id"] === action?.payload?.product["_id"]);
      let totalCartPrice = 0;
      let updatedProducts = [];
      if (alreadyExists) {
        totalCartPrice = 0;
        // if it's already exist,add amount you want to the existing in orders
        updatedProducts = state?.orders?.products?.map((item) => {
          if (item["_id"] === action?.payload?.product["_id"]) {
            item.amount += action?.payload?.product?.amount;
            item.totalPrice = item.amount * item.price;
          }
          return item;
        });

        updatedProducts.forEach((item) => {
          totalCartPrice += item?.totalPrice;
        })

        state.orders = {
          ...state.orders,
          products: updatedProducts,
          total: totalCartPrice.toFixed(2)
        }
      } else {
        // if it's not already exist,add the whole product you want to orders
        totalCartPrice = 0;
        updatedProducts = [
          ...state?.orders?.products,
          action?.payload?.product
        ]

        updatedProducts.forEach((item) => {
          totalCartPrice += item.totalPrice;
        })

        state.orders = {
          ...state.orders,
          products: updatedProducts,
          total: totalCartPrice.toFixed(2)
        }
      }
      localStorage.setItem("orders", JSON.stringify(state.orders))
      toast.success('You succesfully add this product to your cart')
    },
    remove: (state, action) => {
      let newProducts = state?.orders?.products?.filter(item => item["_id"] !== action?.payload["_id"]);
      let totalCartPrice = 0;
      newProducts.forEach((item) => {
        totalCartPrice += item.totalPrice;
      })

      state.orders = {
        ...state.orders,
        products: newProducts,
        total: totalCartPrice.toFixed(2)
      }
      localStorage.setItem("orders", JSON.stringify(state.orders))
      toast.warning('You have removed a product from your cart')
    },
    clearCart: (state, action) => {
      state.orders = {
        ...state.orders,
        products: [],
        total: 0.00
      }
      localStorage.setItem("orders", JSON.stringify(state.orders))

      if (action?.payload?.type === 'clear') {
        toast.warning('You have removed all products from your cart')
      }
    },
    increaseProduct: (state, action) => {
      let totalCartPrice = 0;
      let newProducts = state?.orders?.products?.map((item) => {
        if (item["_id"] === action.payload["_id"]) {
          item.amount++;
          item.totalPrice += item.price;
          state.total += item.price;
        }
        return item
      })

      newProducts.forEach((item) => {
        totalCartPrice += item.totalPrice;
      })

      state.orders = {
        ...state.orders,
        products: newProducts,
        total: totalCartPrice.toFixed(2)
      }
      localStorage.setItem("orders", JSON.stringify(state.orders))
    },
    decreaseProduct: (state, action) => {
      let totalCartPrice = 0;
      let newProducts = state?.orders?.products?.filter((item) => {
        if (item["_id"] === action.payload["_id"] && item.amount > 1) {
          item.amount--;
          item.totalPrice -= item.price;
        } else {
          return item["_id"] !== action.payload["_id"]
        }
        return item
      })

      newProducts.forEach((item) => {
        totalCartPrice += item.totalPrice;
      })

      state.orders = {
        ...state.orders,
        products: newProducts,
        total: totalCartPrice.toFixed(2)
      }
      localStorage.setItem("orders", JSON.stringify(state.orders))
    }
  }
})

const getOrders = (state) => {
  return state?.carts?.orders;
}

export const { add, remove, clearCart, increaseProduct, decreaseProduct } = cartsSlice.actions;
export { getOrders };
export default cartsSlice.reducer;