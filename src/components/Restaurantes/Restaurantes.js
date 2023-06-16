import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./imgs_restaurante/img1.jpg";
import img2 from "./imgs_restaurante/img2.jpg";
import img3 from "./imgs_restaurante/img3.jpg";
import img4 from "./imgs_restaurante/img4.jpg";
import img5 from "./imgs_restaurante/img5.jpg";
import "swiper/swiper.min.css";
import "swiper/css";
import classNames from "classnames";
import styles from "./restaurantes.module.css";

// import required modules
export const Restaurantes = () => {
  return (
    <>
      <div className={classNames("container-fluid", styles.cards_resta1)}>
        <h1>Restaurantes</h1>
        <Swiper
          centerInsuficienteDiapositivas="true"
          loop={true}
          slidesPerView={3}
          grabCursor="true"
          spaceBetween={30}
          className={classNames(styles.my_swiperf)}
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
            <div className={classNames("Card", styles.cards_resta)}>
              <div className={classNames(styles.img_re)}></div>

              <div
                className={classNames(
                  "d-flex justify-content-center ",
                  styles.img_ce
                )}
              >
                <img src={img2} />
              </div>

              <div className={classNames(styles.card_body)}>
                <h3>Popeyes</h3>
                <p>ven disfruta</p>
                <a href="#" className="button">
                  Mas ifno
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={classNames("Card", styles.cards_resta)}>
              <div className={classNames(styles.img_re)}></div>

              <div
                className={classNames(
                  "d-flex justify-content-center",
                  styles.img_ce
                )}
              >
                <img src={img1} />
              </div>

              <div className={classNames(styles.card_body)}>
                <h3>Popeyes</h3>
                <p>ven disfruta</p>
                <a href="#" className="button">
                  Mas info
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames("Card", styles.cards_resta)}>
              <div className={classNames(styles.img_re)}></div>

              <div
                className={classNames(
                  "d-flex justify-content-center",
                  styles.img_ce
                )}
              >
                <img src={img3} />
              </div>

              <div className={classNames(styles.card_body)}>
                <h3>Popeyes</h3>
                <p>ven disfruta</p>
                <a href="#" className="button">
                  Mas info
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className={classNames(
            "container-sm d-flex justify-content-center ",
            styles.boton_info
          )}
        >
          {" "}
          <a href="#" >
            Ver todos los restaurantes
          </a>
        </div>
      </div>
    </>
  );
};
export default Restaurantes; // export default Restaurante