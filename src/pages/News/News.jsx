import React from 'react'

import { SideBar } from '../../components'
import Container from '../../Layout/Container'
import classes from './News.module.css'

const latestBlogs = [
  {
    id: 1,
    name: '5 ĐỊA ĐIỂM DU LỊCH NỔI TIẾNG Ở VIỆT NAM',
    date: '12/05/2016',
    time: "08:39:21",
    author: "silkshop-02",
    image: "/img/blog_6-870x397.jpg",
    desc: "Nằm giữa sân bay Cam Ranh và thành phố Nha Trang, Mia là một khu nghỉ dưỡng đạt tiêu chuẩn 5 sao, khai trương vào tháng 9/2011. Khu nghỉ dưỡng được phân bố ở 2 độ cao khác nhau: khu bên trên như được tạc ra từ trong núi, lưng chừng ở cao độ 60m nhìn xuống bãi cát yên bình – đây cũng là nơi bố trí khu vực còn lại của khu nghỉ dưỡng. Khu nghỉ dưỡng được thiết kế bởi kiến trúc sư Gary Fell và được xây dựng trên các nguyên tắc thân thiện với môi...",
    type: ["Blog", "Fashion", "Collection"]
  },
  {
    id: 2,
    name: 'BÚT CHÌ MÀU, GÚP BẠN VẼ NHANH HƠN',
    date: '12/05/2016',
    time: "08:38:27",
    author: "silkshop-02",
    image: "/img/blog_6-870x397.jpg",
    desc: "Nằm giữa sân bay Cam Ranh và thành phố Nha Trang, Mia là một khu nghỉ dưỡng đạt tiêu chuẩn 5 sao, khai trương vào tháng 9/2011. Khu nghỉ dưỡng được phân bố ở 2 độ cao khác nhau: khu bên trên như được tạc ra từ trong núi, lưng chừng ở cao độ 60m nhìn xuống bãi cát yên bình – đây cũng là nơi bố trí khu vực còn lại của khu nghỉ dưỡng. Khu nghỉ dưỡng được thiết kế bởi kiến trúc sư Gary Fell và được xây dựng trên các nguyên tắc thân thiện với môi...",
    type: ["Blog", "Fashion", "Collection"]
  },
  {
    id: 3,
    name: 'PHONG CÁCH THỜI TRANG 2016',
    date: '12/05/2016',
    time: "08:37:01",
    author: "silkshop-02",
    image: "/img/blog_6-870x397.jpg",
    desc: "Nằm giữa sân bay Cam Ranh và thành phố Nha Trang, Mia là một khu nghỉ dưỡng đạt tiêu chuẩn 5 sao, khai trương vào tháng 9/2011. Khu nghỉ dưỡng được phân bố ở 2 độ cao khác nhau: khu bên trên như được tạc ra từ trong núi, lưng chừng ở cao độ 60m nhìn xuống bãi cát yên bình – đây cũng là nơi bố trí khu vực còn lại của khu nghỉ dưỡng. Khu nghỉ dưỡng được thiết kế bởi kiến trúc sư Gary Fell và được xây dựng trên các nguyên tắc thân thiện với môi...",
    type: ["Blog", "Fashion", "Collection"]
  },
  {
    id: 4,
    name: 'MÓN ĂN ĐẶC BIỆT CỦA MIỀN TÂY',
    date: '12/05/2016',
    time: "08:36:17",
    author: "silkshop-02",
    image: "/img/blog_6-870x397.jpg",
    desc: "Nằm giữa sân bay Cam Ranh và thành phố Nha Trang, Mia là một khu nghỉ dưỡng đạt tiêu chuẩn 5 sao, khai trương vào tháng 9/2011. Khu nghỉ dưỡng được phân bố ở 2 độ cao khác nhau: khu bên trên như được tạc ra từ trong núi, lưng chừng ở cao độ 60m nhìn xuống bãi cát yên bình – đây cũng là nơi bố trí khu vực còn lại của khu nghỉ dưỡng. Khu nghỉ dưỡng được thiết kế bởi kiến trúc sư Gary Fell và được xây dựng trên các nguyên tắc thân thiện với môi...",
    type: ["Blog", "Fashion", "Collection"]
  },
]

const Tags = [
  {
    id: 1,
    name: 'Blog',
  },
  {
    id: 2,
    name: 'Fashion',
  },
  {
    id: 3,
    name: 'Collection',
  },
  {
    id: 4,
    name: 'Accessories',
  },
]

const News = () => {
  return (
    <Container>
      <div className={ classes.wrapper }>
        <SideBar />
        <div className={ classes.newsList }>
          { latestBlogs.map((item, index) => {
            return (
              <article className={ classes.post }>
                <h4>{ item.name }</h4>
                <p className={ classes.meta }>
                  Người viết <strong>{ item.author }</strong> lúc { item.date } { item.time }
                </p>
                <div className={ classes.content }>
                  <img src={ item.image } alt={ item.name } />
                  <p>
                    { item.desc }
                  </p>
                </div>
                <ul className={ classes.postTag }>
                  <li>Tags:</li>
                  { item.type.map((tag, index) => {
                    return (
                      <li key={ index }>
                        { ` ${tag},` }
                      </li>
                    )
                  }) }
                </ul>
                <button className={ classes.viewMore }>
                  Xem nhiều hơn
                  <i class="fas fa-long-arrow-alt-right"></i>
                </button>
                <hr />
              </article>
            )
          }) }
        </div>
      </div>
    </Container>
  )
}

export default News
