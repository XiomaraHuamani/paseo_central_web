import React from 'react';
import styles from './sliderinfo.module.css';
import classNames from "classnames";
import image1 from "./images/bg-footer-newsletter.jpg";

export const SliderInfo = () => {

    return (
        <>
            <div className={classNames(styles.container__box,/* "container-fluid"*/)}>
                <div className={classNames(styles.container__general, "row row-cols-2 ")}
                    style={{width: "2160", height: "650"}}>
                        <div class={classNames(styles.box__celda1, "col ")}>
                        No te pierdas ningún plan<br/>
                        Con nuestro mall Arequipeño<br/>
                        Paseo central. 
                        </div>
                        <div class={classNames(styles.box__celda2, "col ")}>
                            <div class={classNames(styles.box__celda1, "row ")}>
                                Califícanos
                                <div className="row justify-content-center "> 
                                    <hr className={styles.eventos__linea} size="20" />
                                </div>
                                
                                <div class={classNames(styles.box__celda3, "row-6 ")}>
                                <form class={classNames(styles.box__celda3)}>
                                    <p class={classNames(styles.box__celda3, "clasificacion")}>
                                    <input id="radio1" type="radio" name="estrellas" value="5"/>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4"/>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3"/>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2"/>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1"/>
                                    <label for="radio5">★</label>
                                    </p>
                                </form>
                                </div>
                                <div class={classNames(styles.box__celda1, "row-6 ")}>
                                    <button type="button" class="btn btn-outline-light">
                                        Iniciar Sesion
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>

        </>
    );
};
export default SliderInfo;