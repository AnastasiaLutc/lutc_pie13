import React from "react";
import "./style.scss"
// import { Link } from "react-router-dom";

const HomePage = () => {
    return <div className={'home'}>
        <div><img src={"./image/main_cosmo.png"} className={'img'} alt="Банер"/></div>
        <div> <div className={"title"}><span>Направления</span></div>
        <div className={"orientation_item"}><div className={'items'}><img src={"./icons/kupol.png"} className={'items__im1'} alt="icon_kupol"/>
                <h1>Полнокупольные шоу-программы</h1>
                <h2>Яркие полнокупольные шоу-программы для детей и взрослых</h2></div>
         <div className={'items'}><img src={"./icons/solar-system2.0.png"} className={'items__im2'} alt="icon_solar_system"/>
                <h1 style={{marginBottom:6}}>Мультимедийные программы</h1>
                <h2>Познавательные мультимедийные программы для детей и взрослых</h2></div>
        <div className={"items"}><img src={"./icons/telescop2.0.png"} className={'items__im3'} alt="icon_telescop"/>
            <h1>Астрономические наблюдения</h1>
            <h2>Здесь каждый желающий может наблюдать в телескоп ночное небо</h2></div>
        <div className={"items"}><img src={"./icons/gagarin.png"} className={'items__im4'} alt="icon_gagarin"/>
            <h1 style={{marginBottom:39}}>Мероприятия и праздники</h1>
            <h2>Праздничные мероприятия и знаменательные даты отечественной космонавтики</h2></div>
        </div></div>
        <div> <div className={"title"}><span>Галлерея</span></div>
            <div className={'gallery_st1'}><img src={"./image/gallery1.jpg"} style={{marginRight:17}} alt="photo_gallery1"/>
            <img src={"./image/gallery2.jpg"} alt="photo_gallery2"/></div>
            <div className={'gallery_st2'}><img src={"./image/gallery3.jpg"} style={{marginRight:23}} alt="photo_gallery3"/>
            <img src={"./image/gallery4.jpg"} style={{marginRight:23}} alt="photo_gallery4"/>
            <img src={"./image/gallery5.jpg"} alt="photo_gallery5"/></div>
        </div>
        <div>новости</div>
        <div>цены</div>
        <div>напишите нам</div>
        </div>
}

export default HomePage