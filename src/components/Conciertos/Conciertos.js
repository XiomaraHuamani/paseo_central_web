import React from "react";
import img2 from "./conciertosimg/img2.jpg";
import classNames from "classnames";
import styles from "./concierto.module.css";

export const Conciertos = () => {
  return (
    <>
      <div
        className={classNames("contaiener-fluid  ", styles.container_conciertos)}
      >
        <h1>Conoce nuestros cantantes del mes de Junio</h1>
        <div
          className={classNames(
            "row row-cols-1 row-cols-lg-2 g-1 g-lg-3 m-4 ",
            styles.container_conciertos
          )}
        >
          <div className={classNames("col col-md-6 p-3  ")}
          style={{ 
              display: 'grid', 
              justifyContent: 'center', 
              alignItems: 'center',
              placeItems: 'center' }}>

            <img src={img2} 
            style={{ 
              marginLeft: 'auto', 
              marginRight: 'auto',
              maxWidth: '60%', 
              height: 'auto'}}/>
          </div>
          <div className={classNames("col col-md-6 p-3   ")}style={{alignItems: 'center',
              placeItems: 'center',
              marginLeft: 'auto', 
              marginRight: 'auto',
              height: 'auto',
              display: 'grid'}}>
            
          <div className={classNames("col  border ", styles.col_conciertos)}>
            <center>
              <i class="fa-solid fa-star"></i>
            </center>
            <h3>Cantante</h3>
            <p>
              "Disfruta de tu musica un vivo y viva una experencia inolviadeble
              con bnuestas estrellas
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Conciertos;
