import React from 'react'
import ruleta from '../img/wheel.png'
import styles from "../App.module.css";
import classNames from 'classnames';

const Ruleta = (props) => (

    <div>
        <h1 align="center" className={styles.ruleta_puntos}>Puntos: {props.total_points}</h1>
        <p align="center">
            <img
                id={styles.img_ruleta}
                src={ruleta}
                style={{ transform: 'rotate(' + props.data_ruleta + 'deg)', WebkitTransform: 'rotate(' + props.data_ruleta + 'deg)' }}
                alt="Ruleta"
                onTransitionEnd={props.showRuletaResult}
                className={classNames("img-responsive",styles.img_ruleta)}
                ref={props.ruleta}
            />
        </p>
        <p align="center">
            <button id="btnAnimar" disabled={props.animatedRuleta} onClick={props.animarEvent} className="btn btn-warning btn-orange btn-lg">GIRA LA RULETA</button>
        </p>
    </div>

)

export default Ruleta