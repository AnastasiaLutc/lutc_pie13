import React from "react";
import "./style.scss"

export const PosterPage = () => {
    return <div className={"orientation"}>
        <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><p>Путешествия по звёздным мирам</p></div>
        </div>
        <div className={"title"}><span>Расписание</span></div>
    </div>}