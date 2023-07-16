import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import classNames from "classnames";
import img1 from "./img/promo1.jpg";
import img2 from "./img/promo2.jpg";
import img3 from "./img/promo3.jpg";
import img4 from "./img/promo4.jpg";
import styles from "./App.module.css";
import "./navbar.css";
export const Promociones = () => {
  return (
    <>
      <div className={classNames(styles.promos, "container-fluid")}>
        <h1>Promociones del mes</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className={styles.myswiper_promo}
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
            <div className={classNames("card", styles.promo_card)}>
              <div>
                <img src={img1} />
              </div>
              <div className={styles.conte_promo}>
                <center>
                  <div className={classNames(styles.promo_con)}>
                    <h6>Desceunto en cine solo en paso central </h6>
                    <br />
                    <p>
                      d isfruta de tu cine al 50% solo en paseo central solo con
                      pelicula en la lista
                    </p>

                    <a href="#" className="button ">
                      Mas ifno
                    </a>
                  </div>
                </center>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames("card", styles.promo_card)}>
              <div>
                <img src={img2} />
              </div>
              <div className={styles.conte_promo}>
                <center>
                  <div className={classNames(styles.promo_con)}>
                    <h6>Desceunto en cine solo en paso central </h6>
                    <br />
                    <p>
                      disfruta de tu cine al 50% solo en paseo central solo con
                      pelicula en la lista
                    </p>

                    <a href="#" className="button">
                      Mas ifno
                    </a>
                  </div>
                </center>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames("card", styles.promo_card)}>
              <div>
                <img src={img3} />
              </div>
              <div className={styles.conte_promo}>
                <center>
                  <div className={classNames(styles.promo_con)}>
                    <h6>Desceunto en cine solo en paso central </h6>
                    <br />
                    <p>
                      disfruta de tu cine al 50% solo en paseo central solo con
                      pelicula en la lista
                    </p>

                    <a href="#" className="button">
                      Mas ifno
                    </a>
                  </div>
                </center>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames("card", styles.promo_card)}>
              <div>
                <img src={img4} />
              </div>
              <div className={styles.conte_promo}>
                <center>
                  <div className={classNames(styles.promo_con)}>
                    <h6>Desceunto en cine solo en paso central </h6>
                    <br />
                    <p>
                      disfruta de tu cine al 50% solo en paseo central solo con
                      pelicula en la lista
                    </p>

                    <a href="#" className="button">
                      Mas ifno
                    </a>
                  </div>
                </center>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
