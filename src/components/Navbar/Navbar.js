import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LineIcon from "react-lineicons";
import { NavLink } from "react-bootstrap";
import styles from "./navbar.module.css";
//import img1 from "./img/logo1.png";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
    return (
        <>
        <nav className={classNames(styles.navbar, "navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow ")}>
        <img src="/assets/Logo.png" width="50" height="60" alt="" />
          
          <ul className={styles.links__nav}>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Home</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Patio de comidas</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Cine</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Conciertos</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Promociones</a></li>
          </ul>
          <a href="#" className={styles.action__btn}>Ingresar</a>
          <div className={styles.toggle_btn} onClick={toggleMenu}>
            <i className={isOpen ? 'lni lni-close' : 'lni lni-menu'}></i>
          </div>

          <div className={`${styles.dropdown_menu} ${isOpen ? styles.open : ''}`}>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Home</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Patio de comidas</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Cine</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Conciertos</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Promociones</a></li>
            <li><a href="#" className={styles.action__btn}>Ingresar</a></li>
          </div>

        </nav>
        </>
    );
};
export default Navbar;