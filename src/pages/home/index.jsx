import React from "react";
import "./style.scss"
import { Link } from "react-router-dom";

const HomePage = () => {
    return <div className={'home'}>
        <span style={{marginRight:20}}>home</span>
        <Link to={'/contact'}>Контакты</Link>
        </div>
}

export default HomePage