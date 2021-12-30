import React from "react";
import RequiredAuth from "./Layout/RequiredAuth/RequiredAuth";
import {
  Account,
  Cart,
  CheckOut,
  History,
  HomePage,
  Intro,
  Login,
  News,
  PageNotWorking,
  ProductCategory,
  Products
} from "./pages";

const routes = [
  {
    path: '/',
    page: <HomePage />
  },
  {
    path: '/login/:loginState',
    page: <Login />
  },
  {
    path: '/intro',
    page: <Intro />
  },
  {
    path: '/news',
    page: <News />
  },
  {
    path: '/*',
    page: <PageNotWorking />
  },
  {
    path: '/categories',
    page: <ProductCategory />
  },
  {
    path: '/categories/:categoryName',
    page: <ProductCategory />
  },
  {
    path: '/category/:categoryId',
    page: <Products />
  },
  {
    path: '/user/:userId/cart',
    page:
      (<RequiredAuth>
        <Cart />
      </RequiredAuth>)
  },
  {
    path: '/user/:userId/history',
    page:
      (<RequiredAuth>
        <History />
      </RequiredAuth>)
  },
  {
    path: '/account/:accountOption',
    page: (<RequiredAuth>
      <Account />
    </RequiredAuth>)
  },
  {
    path: '/user/:userId/checkout',
    page: <CheckOut />
  }
];

export default routes;