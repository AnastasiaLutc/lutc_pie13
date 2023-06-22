import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
import classNames from "classnames";


export const HeaderPage = () => {
    const [isOpen,setIsOpen] = React.useState(false)

    return ( <React.Fragment>
    <div className={'header'}>
        <div className={'header__logo'}><img src={"./picture/logo.svg"} style={{marginRight:30}} alt="logo"/>
        <img src={"./picture/name.svg"} alt="Планетарий г.Барнаул"/></div>
        <div className={'header__menu'}>
            <div><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/poster'}>Афиша</Link></div>
            <div><Link to={'/news'}>Новости</Link></div>
            <div><Link to={'/orientation'}>Услуги</Link></div>
            <div><Link to={'/contact'}>О нас</Link></div>
        </div>
        <div className={'header__leng'}>
            <div>en</div>
            <div>/</div>
            <div>ru</div>
        </div>
    </div>
    <div className={"header-mobile"}>
        <div className={"header-mobile__menu"}>
            <div className={'header__logo'}><img src={"./picture/logo.svg"} style={{marginRight:30}} alt="logo"/>
                    <img src={"./picture/name.svg"} alt="Планетарий г.Барнаул"/></div>
            <div className={'header-mobile__leng'}>
                <div>en</div>
                <div>/</div>
                <div>ru</div>
            </div>
            <div onClick={()=>setIsOpen(!isOpen)}><img src={"./picture/hamburger.svg"} alt="menu-burger"/></div>
        </div>
        <div className={classNames('header-mobile__block',{'header-mobile__block-open':isOpen})}>
            {isOpen && <>
            <div onClick={()=>setIsOpen(!isOpen)}><img src={"./picture/close.svg"} alt="menu-close"/></div>
            <div style={{marginTop:70}}><Link to={'/'}>Главная</Link></div>
            <div><Link to={'/poster'}>Афиша</Link></div>
            <div><Link to={'/news'}>Новости</Link></div>
            <div><Link to={'/orientation'}>Услуги</Link></div>
            <div><Link to={'/contact'}>О нас</Link></div>
            <div onClick={()=>setIsOpen(!isOpen)}></div>
            </>}
        </div>
         
        
    </div>
    </React.Fragment>
    )
}