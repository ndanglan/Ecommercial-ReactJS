import React from 'react'

import { SideBar, Widget } from '../../components';
import Container from '../../Layout/Container';

import classes from './Intro.module.css';

const categoryWidget = [
  {
    id: 1,
    name: 'Sản phẩm bán chạy',
    amount: '10'
  },
  {
    id: 2,
    name: 'Sản phẩm mới',
    amount: '9'
  },
  {
    id: 3,
    name: 'Sản phẩm nổi bật',
    amount: '8'
  },
  {
    id: 4,
    name: 'Sản phẩm khuyến mãi',
    amount: '6'
  },
]

const newProductWidget = [
  {
    id: 1,
    name: "Đồng hồ trang trí",
    price: '850,000₫',
    image: "/img/front-product-img.jpg"
  },
  {
    id: 2,
    name: "Đồng hồ trang trí",
    price: '360,000₫',
    image: "/img/front-product-img.jpg"
  },
  {
    id: 3,
    name: "Đồng hồ trang trí",
    price: '130,000₫',
    image: "/img/front-product-img.jpg"
  },
  {
    id: 4,
    name: "Đồng hồ trang trí",
    price: '280,000₫',
    image: "/img/front-product-img.jpg"
  },
  {
    id: 5,
    name: "Đồng hồ trang trí",
    price: '450,000₫',
    image: "/img/front-product-img.jpg"
  },
]

const Intro = () => {
  return (
    <Container wrapper={ true }>
      <SideBar>
        <Widget title="Thể loại">
          { categoryWidget.map((item, index) => {
            return (
              <a href="#_" className={ classes.categoryItem } key={ item.id }>
                { item.name }
                <span className={ classes.categoryAmount }>{ item.amount }</span>
              </a>
            )
          }) }
        </Widget>
        <Widget title="Sản phẩm mới">
          { newProductWidget.map((item, index) => {
            return (
              <div className={ classes.newProductItem } key={ item.id }>
                <div className={ classes.newProductImage }>
                  <a href="#_">
                    <img src={ item.image } alt={ item.name } />
                  </a>
                </div>
                <div className={ classes.newProductMeta }>
                  <a href="#_">
                    { item.name }
                  </a>
                  <span>
                    { item.price }
                  </span>
                </div>
              </div>
            )
          }) }
        </Widget>
      </SideBar>
      <div className={ classes.content }>
        <h1>giới thiệu</h1>
        <div className={ classes.desc }>
          <p>
            Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
          </p>
          <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
          <div>
            <ul>
              <li>
                Bạn là ai
              </li>
              <li>
                Giá trị kinh doanh của bạn là gì
              </li>
              <li>
                Địa chỉ cửa hàng
              </li>
              <li>
                Bạn đã kinh doanh trong ngành hàng này bao lâu rồi
              </li>
              <li>
                Bạn kinh doanh ngành hàng online được bao lâu
              </li>
              <li>
                Đội ngũ của bạn gồm những ai
              </li>
              <li>
                Thông tin liên hệ
              </li>
              <li>
                Liên kết đến các trang mạng xã hội (Twitter, Facebook)
              </li>
            </ul>
          </div>
          <p>
            Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="#_"><strong>đây</strong></a>  hoặc thêm những bài viết mới trong phần quản lý <a href="#_"><strong>Trang nội dung.</strong></a>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Intro
