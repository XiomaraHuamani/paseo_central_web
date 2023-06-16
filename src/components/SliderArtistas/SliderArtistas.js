import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
//imagenes
import img1 from "./img_f/img1.png";
import img2 from "./img_f/img2.jpeg";
import img3 from "./img_f/img3.png";
import img4 from "./img_f/img4.png";
import img5 from "./img_f/img5.png";

import classNames from "classnames";

import { EffectCoverflow } from "swiper";

import styles from "./SliderArtistas.module.css";
import { click } from "@testing-library/user-event/dist/click";

export const SliderArtistas = () => {
    return (
        <>
            <div
                className={classNames(
                    "container-fluid border border-dark",
                    styles.contenedor_e
                )}
            >
                <h1>Concierto de fin de semana </h1>
                <Swiper
                    slidesPerView={4}
                    grabCursor="true"
                    spaceBetween={10}
                    loop={true}
                    centeredSlides="true"
                    effect="coverflow"
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                    className={classNames(styles.my_swiperf, "border border-danger")}
                    modules={[EffectCoverflow]}
                >
                    <SwiperSlide>
                        <div className={styles.ef__slider}>
                            <img src={img1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classNames(styles.ef__slider, "Card")}>
                            <img src={img2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ef__slider}>
                            <img src={img3} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ef__slider}>
                            <img src={img4} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classNames(styles.ef__slider, "Card")}>
                            <img src={img5} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classNames(styles.ef__slider, "Card")}>
                            <img src={img1} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classNames(styles.ef__slider, "Card")}>
                            <img src={img2} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classNames(styles.ef__slider, "Card")}>
                            <img src={img3} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};
export default SliderArtistas;
