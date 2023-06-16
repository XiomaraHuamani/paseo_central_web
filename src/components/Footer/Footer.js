import React from "react";
import styles from "./footer.module.css";

import image1 from "./img/youtube.svg";
import image2 from "./img/twitter.svg";
import image3 from "./img/facebook.svg";
import logo2 from "./img/logo2.png"

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className={styles.container__footer}>
          <div className={styles.box__footer}>
            <div className={styles.logo}>
              <img src={logo2} alt="Logo de paseo central" />
              
            </div>
            <div className={styles.terms}>
              <p>
                Tu mall arequipeño con el mejor entretenimiento familiar. Calle
                Arturo Ibañez 105( Costado del Terrapuerto), Arequipa, Peru
              </p>
            </div>
          </div>
          <div className={styles.box__footer}>
            <h2> Soluciones </h2>
            <a href="#">App markitg</a>
            <a href="#">App Desaroolo</a>
            <a href="#">App desarrllo </a>
            <a href="#"> App dessarrolo</a>
            <a href="#"> App movil </a>
          </div>
          <div className={styles.box__footer}>
            <h2>Compañia</h2>
            <a href="#">Acerca de</a>
            <a href="#">Trabajos</a>
            <a href="#">Procesos</a>
            <a href="#">Servicios</a>
          </div>
          <div className={styles.box__footer}>
            <h2>Redes Sociales</h2>
            <a href="https://www.facebook.com/PaseoCentralAqp">
              {" "}
              <i class="fab fa-facebook-square"></i> Facebook
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i> Twitter
            </a>
            <a href="https://api.whatsapp.com/send?phone=%2B51977896323&data=AWA1QntFk6vv7i7_17rDf9_PEBl85TeGgkK2wh_GHo94ZVUDmrBIhVeeL79byae5k4WmaKSE_35f4CfHvIBSrrXS_79-0bTqHTlQ4PPwCqmr0tC5QMvn6hgxoAZ82lDfLy_1RoIV5KKu59T_r5nnsvKmYSBlYoOjLJVzBFK0aIl7JAfazlnvvJvuJIL8VM2lAfYfRu5c7JbBjAPmCTr3qVSCBGGXuGt2Zog-mRSZebCXmjIClQ30gnGZkLqrX9kzSkSLqidgPgIOrNiPqUNpVpdih-Tfu5McEkHzbKEfpv7ZIqEq1tU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0rIprqORwRFwcHji-VGrl9tViu64fEko_1WfPhIZ7vass9aj5Ageir2to">
              <i class="fa-brands fa-square-whatsapp"></i> whatsapp{" "}
            </a>
            <a href="https://www.instagram.com/paseocentralarequipa/">
              <i class="fab fa-instagram-square"></i> Instagram
            </a>
          </div>
        </div>

        <div className={styles.footer__container}>
            
            </div>
    
            <div className={styles.footer__copy}>
                <div className={styles.footer__social}>
                    <a href="#" className={styles.footer__icons}><img src={image1} class="footer__img"/></a>
                    <a href="#" className={styles.footer__icons}><img src={image2} class="footer__img"/></a>
                    <a href="#" className={styles.footer__icons}><img src={image3} class="footer__img"/></a>
                </div>
    
                <h6 className={styles.footer__copyright}>Ven visitanos todo los dias!<b> Paseo Central</b> </h6>
            </div>
      </footer>
    </>
  );
};
