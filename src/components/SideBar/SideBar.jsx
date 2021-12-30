import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { productsServices } from '../../services';
import useLoadingData from '../../hooks/useLoadingData';
import { Widget } from '..';

import classes from './SideBar.module.css'

const SideBar = ({ children, left }) => {
  let services = productsServices.list;
  const products = useLoadingData(services);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const loadData = () => {
    let featuredData = products?.slice(0, 5);
    setFeaturedProducts(featuredData)
  }

  useEffect(() => {
    if (products?.length > 0) {
      loadData();
    }
  }, [products])

  return (
    <div className={ `${left ? classes.wrapper : " "}` }>
      <div>
        { children ? children : null }
        <Widget title="Popular Products">
          { featuredProducts?.map((item, index) => {
            return (
              <div className={ classes.newProductItem } key={ index }>
                <div className={ classes.newProductImage }>
                  <Link to={ `/category/${item["_id"]}` }>
                    <img src={ item.image } alt={ item.title } />
                  </Link>
                </div>
                <div className={ classes.newProductMeta }>
                  <Link to={ `/category/${item["_id"]}` }>
                    { item.title }
                  </Link>
                  <span>
                    { item.price } $
                  </span>
                </div>
              </div>
            )
          }) }
        </Widget>
        <div className={ classes.adv }>
          <a href="#_">
            <img src="/img/ads_block.webp" alt="adv" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBar