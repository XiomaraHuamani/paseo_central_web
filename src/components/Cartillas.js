import img1 from "./img/center.svg";
import img2 from "./img/map.svg";
import img3 from "./img/oferta.svg";
import img4 from "./img/star.svg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import styles from "./App.module.css";

import classNames from "classnames";

//import { Video } from "./components/Navbar/Video";
export const Cartillas = () => {
  return (
    <>
      <div className={classNames("container-fluid   ", styles.fondo_cart)}>


        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          className={styles.my__swiper}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
              slidesPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
          }}
        >
          <center>
            <SwiperSlide>
              <div className={styles.cart__viwer}>
                <img src={img1} />
                <div className="row">
                  <a>comidas</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.cart__viwer}>
                <img src={img2} />
                <div className="row">
                  <a>comidas</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cart__viwer}>
                <img src={img3} />
                <div className="row">
                  <a>comidas</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cart__viwer}>
                <img src={img4} />
                <div className="row">
                  <a>comidas</a>
                </div>
              </div>
            </SwiperSlide>
          </center>
        </Swiper>

      </div>

    </>
  );
};
