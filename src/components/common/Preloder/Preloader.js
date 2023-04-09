import React from "react";

import css from './Preloader.module.css'
import preloader from "../../../assets/images/preloder.svg";

const Preloader = (props) => {
    return <div className={css.preloader}>
        this.props.isFetching ? <img src={preloader}/> : null

    </div>
}

export  default Preloader;