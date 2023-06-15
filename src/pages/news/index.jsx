import React from "react";
import "./style.scss"

export const NewsPage = () => {
    return <div className={"orientation"}>
        <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><p>Главные новости космоса</p></div>
        </div>
        <div className={"title"}><span>Новости</span></div>
    </div>}