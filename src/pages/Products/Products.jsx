import React from 'react'
import { useParams } from 'react-router-dom';

import { ProductSingle } from '../../components'
import useLoadingData from '../../hooks/useLoadingData';
import { productsServices } from '../../services';

import classes from './Products.module.css'

const Products = () => {
  const { categoryId } = useParams();
  let services = productsServices.getSingleProducts;
  const product = useLoadingData(services, categoryId);

  return (
    <main className={ classes.main }>
      <ProductSingle productInfo={ product } />
    </main>
  )
}

export default Products
