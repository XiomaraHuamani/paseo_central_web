import React from "react";
import img2 from "./img/concierto.jpg";
import classNames from "classnames";
import styles from "./App.module.css";
import "./navbar.css";
export const Conciertos = () => {
  return (
    <>
      <section className={styles.scheduleSection} >
        <div className="container">
          <h1 className="text-white mb-4">Calendario de eventos</h1>
          <div className="row">
            <div className="col-12 text-center">

              <div className={styles.tableResponsive}>
                <table className={`${styles.scheduleTable} table table-dark`}>
                  <thead>
                    <tr>
                      <th scope="col">Semana</th>
                      <th scope="col">Sabado</th>
                      <th scope="col">Domingo</th>
                      <th scope="col">Dia Sorpresa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Semana 1</th>
                      <td className={`${styles.tableCell} ${styles.popBackgroundImage}`}>
                        <h3>Pop Night</h3>
                        <p className="mb-2">5:00 - 7:00 PM</p>
                        <p>By Adele</p>
                        <div className={styles.sectionOverlay}></div>
                      </td>
                      <td className={styles.tableCell} style={{ backgroundColor: '#F3DCD4' }}></td>
                      <td className={`${styles.tableCell} ${styles.rockBackgroundImage}`}>
                        <h3>Rock &amp; Roll</h3>
                        <p className="mb-2">7:00 - 11:00 PM</p>
                        <p>By Rihana</p>
                        <div className={styles.sectionOverlay}></div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Semana 2</th>
                      <td className={styles.tableCell} style={{ backgroundColor: '#ECC9C7' }}></td>
                      <td className={styles.tableCell}>
                        <h3>DJ Night</h3>
                        <p className="mb-2">6:30 - 9:30 PM</p>
                        <p>By Rihana</p>
                      </td>
                      <td className={styles.tableCell} style={{ backgroundColor: '#D9E3DA' }}></td>
                    </tr> 
                    <tr>
                      <th scope="row">Semana 3</th>
                      <td className={`${styles.tableCell} ${styles.countryBackgroundImage}`}>
                        <h3>Country Music</h3>
                        <p className="mb-2">4:30 - 7:30 PM</p>
                        <p>By Rihana</p>
                        <div className={styles.sectionOverlay}></div>
                      </td>
                      <td className={styles.tableCell} style={{ backgroundColor: '#D1CFC0' }}></td>
                      <td className={styles.tableCell}>
                        <h3>Free Styles</h3>
                        <p className="mb-2">6:00 - 10:00 PM</p>
                        <p>By Members</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Conciertos;
