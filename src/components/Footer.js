import React from "react";
import styles from "./App.module.css";
import logo2 from "./img/logo2.png"
import classNames from "classnames";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className={classNames(styles.logo, "container-md ")}>
          <div className="row row-cols-2 ">
            <div className={classNames(styles.footer_col, "col-6")}>
              <img src={logo2} alt="Locgo de paseo central" />
            </div>
            <div className={classNames(styles.terms, "col")}>
              <p>
                Tu mall arequipeño con el mejor entretenimiento familiar. Arequipa, Peru
              </p>
            </div>
          </div>





        </div>
        <div className={styles.container__footer}>
          <div className={styles.box__footer}>
            <h2>¿Qué buscas?</h2>
            <a href="#">Tiendas</a>
            <a href="#">Restaurantes</a>
            <a href="#">Promociones</a>
            <a href="#">Entretenimiento</ a>
          </div>
          <div className={styles.box__footer}>
            <h2>Redes Sociales</h2>
            <a href="https://api.whatsapp.com/send?phone=%2B51977896323&data=AWA1QntFk6vv7i7_17rDf9_PEBl85TeGgkK2wh_GHo94ZVUDmrBIhVeeL79byae5k4WmaKSE_35f4CfHvIBSrrXS_79-0bTqHTlQ4PPwCqmr0tC5QMvn6hgxoAZ82lDfLy_1RoIV5KKu59T_r5nnsvKmYSBlYoOjLJVzBFK0aIl7JAfazlnvvJvuJIL8VM2lAfYfRu5c7JbBjAPmCTr3qVSCBGGXuGt2Zog-mRSZebCXmjIClQ30gnGZkLqrX9kzSkSLqidgPgIOrNiPqUNpVpdih-Tfu5McEkHzbKEfpv7ZIqEq1tU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0rIprqORwRFwcHji-VGrl9tViu64fEko_1WfPhIZ7vass9aj5Ageir2to">
              <i class="fa-brands fa-square-whatsapp"></i> whatsapp
            </a>
            <a href="https://www.facebook.com/PaseoCentralAqp">

              <i class="fab fa-facebook-square"></i> Facebook
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i> Twitter
            </a>

            <a href="https://www.instagram.com/paseocentralarequipa/">
              <i class="fab fa-instagram-square"></i> Instagram
            </a>
          </div>
          <div className={styles.box__footer}>
            <h2> Ubicacion </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0048798463504!2d-71.54831207751943!3d-16.424578561451494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b68980ddd67%3A0x3577b06342366c97!2sLa%20Barraca%20del%20Mall!5e0!3m2!1ses!2spe!4v1689612722334!5m2!1ses!2spe"
              width="300"
              height="300" allowfullscreen="1"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
           
            
          </div>
        </div>



        <div className={styles.box__copyright}>
          <div >
            <center>

            </center>
          </div>
          <hr />
          <p >
            Ven visitanos todo los dias! <b> Paseo Central</b>
          </p>
        </div>
      </footer>
    </>
  );
};
