import React from "react";
import './style.scss'
import { Link } from "react-router-dom";

export const HeaderPage = () => {
    return <div className={'header'}>
        <div className={'header__logo'}><img src={"./picture/logo.svg"} style={{marginRight:30}} alt="logo"/>
        <img src={"./picture/name.svg"} alt="Планетарий г.Барнаул"/></div>
        <div className={'header__menu'}>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/poster'}>Афиша</Link></div>
            <div><Link to={'/news'}>Новости</Link></div>
            <div><Link to={'/orientation'}>Услуги</Link></div>
            <div><Link to={'/contact'}>О нас</Link></div>
        </div>
        <div className={'header__icons'}>
            <div>en</div>
            <div>/</div>
            <div>ru</div>
        </div>
    </div>
}