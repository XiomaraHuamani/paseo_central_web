import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import classNames from "classnames";
import styles from "./App.module.css";
export const Promociones = () => {
  return (
    <>
      <div
        className={classNames(
          styles.promos,
          "container-fluid border border-dark"
        )}
      >
        <h1>Promociones del mes</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          slidesPerGroup={3}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
          }}
        >
          <SwiperSlide>
            <div classname={styles.card}>
              <img
                src="https://www.washingtonpost.com/resizer/9YWv-qOa9uW7CQZ9UGiW23eTZzU=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BTCNJJN2Y43KPHPXPQWPASXRKM.jpg"
                alt="Avatar"
                classname={styles.image}
              />
              <div classname="container">
                <h3>John Doe</h3>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
