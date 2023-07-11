import React from "react";
//import styles from "./Header.module.css";
//import classNames from "classnames";
//import LineIcon from "react-lineicons";

import paseo1 from "./img/paseo1.jpg";
import paseo2 from "./img/paseo2.jpg";
import paseo3 from "./img/paseo3.jpg";

export const Header = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={paseo1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={paseo2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={paseo3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Header;