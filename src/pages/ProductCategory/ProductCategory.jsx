import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { productsServices } from '../../services';
import useLoadingData from '../../hooks/useLoadingData';
import Container from '../../Layout/Container'
import { ProductOptions, SideBar, Widget } from '../../components'

import classes from './ProductCategory.module.css'

const filterWidget = [
  {
    id: 1,
    price: 'Under $25',
  },
  {
    id: 2,
    price: '$25 to $50',
  },
  {
    id: 3,
    price: '$50 to $100',
  },
  {
    id: 4,
    price: '$100 to $200',
  },
  {
    id: 5,
    price: '$200 & Above',
  },
]

const ProductCategory = () => {
  const params = useParams();
  let services = productsServices.getCategory;

  if (!params.categoryName) {
    services = productsServices.list
  }

  const products = useLoadingData(services, params.categoryName);
  const [filteredPriceProducts, setFilteredPriceProducts] = useState([]);

  const filterPriceHandler = (netPrice, index = 0) => {

    let needProducts = [];
    let maxPrice = netPrice * Math.pow(2, index);
    let minPrice;
    if (index === 0) {
      minPrice = 0
    } else {
      minPrice = netPrice * Math.pow(2, index - 1);
    }

    if ((+netPrice) === 0) {
      setFilteredPriceProducts(products)
      return;
    }

    if ((+maxPrice) > 200) {
      needProducts = products?.filter((item) => (+item.price) >= 200)
      setFilteredPriceProducts(needProducts)
      return;
    }

    if (+maxPrice <= 200) {
      needProducts = products?.filter((item) => (+item.price) < (+maxPrice) && (+item.price) >= (+(minPrice)))

      setFilteredPriceProducts(needProducts)
      return
    }
  }

  useEffect(() => {
    setFilteredPriceProducts(products)
  }, [products])

  return (
    <Container >
      <div className={ classes.wrapper }>
        <SideBar >
          <Widget title="Price">
            <label
              htmlFor={ 0 }
              className={ classes.filterItem }
            >
              All
            </label>
            <input
              name="filterPrice"
              id={ 0 }
              type="radio"
              value={ 0 }
              className={ classes.filterItemLabel }
              onChange={ () => filterPriceHandler(0) }
            />
            { filterWidget.map((item, index) => {
              return (
                <React.Fragment key={ item.id }>
                  <label
                    htmlFor={ item.id }
                    className={ classes.filterItem }
                  >
                    { item.price }
                  </label>
                  <input
                    name="filterPrice"
                    id={ item.id }
                    type="radio"
                    value={ 25 * Math.pow(2, index) }
                    className={ classes.filterItemLabel }
                    onChange={ () => filterPriceHandler(25, index) }
                  />
                </React.Fragment>
              )
            }) }
          </Widget>
        </SideBar>
        <ProductOptions products={ filteredPriceProducts } />
      </div>
    </Container>
  )
}

export default ProductCategory
