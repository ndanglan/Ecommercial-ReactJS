import React, { useEffect, useState } from 'react'

import ProductItem from '../ProductItem/ProductItem'

import classes from './ProductOptions.module.css'

const options = [
  {
    id: 1,
    name: 'Manual',
    value: 'manual',
  },
  {
    id: 2,
    name: 'Title,A-Z',
    value: 'title-ascending',
  },
  {
    id: 3,
    name: 'Title, Z-A',
    value: 'title-descending',
  },
  {
    id: 4,
    name: 'Price, ascending',
    value: 'price-ascending',
  },
  {
    id: 5,
    name: 'Price, descending',
    value: 'price-descending',
  }
]

const ProductOptions = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState(6);
  const [pagingItems, setPagingItems] = useState([]);
  const [typeOfFilter, setTypeOfFilter] = useState("manual")

  const loadPagination = (products) => {
    const totalPages = Math.ceil(products.length / 6);
    let items = [];
    if (totalPages > 1) {
      items = [
        <span className={ classes.prev } key={ 0 } onClick={ () => setPage(prev => {
          if (prev === 1) {
            return 1;
          } else {
            return prev - 1;
          }
        }) }>
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
      ];

      for (let i = 0; i < totalPages; i++) {
        items.push(
          <span className={ `${i + 1 === page ? classes.current : ""} ` }
            onClick={ () => {
              setPage(i + 1)
            } }
            key={ i + 1 }>
            { i + 1 }
          </span>
        )
      }

      items.push(
        <span className={ classes.next } key={ totalPages + 1 } onClick={ () => setPage(prev => {
          if (prev === totalPages) {
            return totalPages;
          } else {
            return prev + 1;
          }
        }) }>
          <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      )
    }
    setPagingItems(items)
  }

  const sortBySelectionHandler = (value, productsForSort) => {

    if (productsForSort?.length === 0) {
      setFilteredProducts([])
      return;
    }

    let data = [];
    console.log(filteredProducts);
    console.log('Products for sort:', productsForSort);
    const arrayForSort = [...productsForSort];

    switch (value) {
      case 'title-ascending':
        data = arrayForSort.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        })
        setFilteredProducts(data)
        return;
      case 'title-descending':
        data = arrayForSort.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
        })
        setFilteredProducts(data)
        return;
      case 'price-ascending':
        data = arrayForSort.sort((a, b) => {
          return a.price - b.price;
        })
        setFilteredProducts(data)
        return;
      case 'price-descending':
        data = arrayForSort.sort((a, b) => {
          return b.price - a.price;
        })
        setFilteredProducts(data)
        return;
      default:
        setFilteredProducts(productsForSort)
        return;
    }
  }

  const resetProducts = (products) => {
    sortBySelectionHandler(typeOfFilter, products)
    loadPagination(products);
    setPage(1);
  }

  useEffect(() => {
    console.log("products was changed:", products);
    resetProducts(products)
  }, [products])

  useEffect(() => {
    sortBySelectionHandler(typeOfFilter, filteredProducts)
    loadPagination(filteredProducts);
  }, [page, typeOfFilter])

  return (
    <div className={ classes.wrapper }>
      <div className={ classes.nav }>
        <div className={ classes.layoutOptions }>
          <div className={ `${classes.layoutOption} ${classes.active}` }>
            <i className="fas fa-border-all"></i>
          </div>
          <div className={ classes.layoutOption }>
            <i className="fas fa-list"></i>
          </div>
        </div>
        <div className={ classes.sortOptions }>
          <span className={ classes.sortTitle }>
            Sắp xếp bởi
          </span>
          <select name="sortBySelection" onChange={ (e) => setTypeOfFilter(e.target.value) } value={ typeOfFilter }>
            { options.map((item) => {
              return (
                <option value={ item.value } key={ item.id }>
                  { item.name }
                </option>
              )
            }) }
          </select>
        </div>
      </div>
      <div className={ classes.content }>
        {
          filteredProducts?.map((item, index) => {
            if (index < pageLength * page && index >= pageLength * page - 6) {
              return <ProductItem { ...item } key={ index } />
            }
          })
        }
      </div>
      { filteredProducts?.length <= 1 ?
        null :
        (
          <div className={ classes.pagination }>
            { pagingItems }
          </div>
        ) }
    </div>
  )
}

export default ProductOptions
