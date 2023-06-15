import React from "react";
import './style.scss'

export const FooterPage = () => {
    return <div className={'footer'}>
        <div className={'footer__contacts'}> 
        <p className={'header_text'}>Контакты</p>
        <p className={'text'}>Адрес: Алтайский край,город Барнаул, пр. Ленина, 19 <br /> Телефоны: +7 (3852) 61-10-65 +7 (3852) 50-06-43 <br/>
                    E-mail: planetary@list.ru</p>
         </div>
        <div className={'footer__data'}>
        <div><img src={'./picture/telegram.svg'} style={{marginRight:10}} alt="icon_telegram"/>
        <img src={'./picture/vk.svg'} alt="icon_vk"/></div>
        <div><p>© 2023 github</p></div>
        </div>
    </div>
}
