import React from "react";
import "./style.scss"

const HomePage = () => {
    return <div className={'home'}>
        <div className={"prev"}><img src={"./image/main_cosmo.png"} className={'img'} alt="Банер"/>
            <div><h1 style={{fontSize:62, top: 151,left:90}}>Звёздные миры</h1>
                <h3>Барнаульский Планетарий – это особый астрономический центр, сочетающий в себе достоинства театра и учебной аудитории. Актёрами в этом необычном театре выступают Солнце, звёзды, планеты, галактики, кометы...</h3>
                <button>Узнать больше</button>
            </div>
        </div>
        <div> <div className={"title_home"}><span>Направления</span></div>
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
            <h2>Праздничные мероприятия и знаменательные даты отечественной космонавтики</h2></div></div>
        </div>
        <div> <div className={"title_home"} ><span>Галлерея</span></div>
            <div className={'gallery_st1'}><img src={"./image/gallery1.jpg"} style={{width:608}} alt="photo_gallery1"/>
            <img src={"./image/gallery2.jpg"} style={{marginLeft:27, width:721}} alt="photo_gallery2"/></div>
            <div className={'gallery_st2'}><img src={"./image/gallery3.jpg"} style={{marginRight:23}} alt="photo_gallery3"/>
            <img src={"./image/gallery4.jpg"} style={{marginRight:23}} alt="photo_gallery4"/>
            <img src={"./image/gallery5.jpg"} alt="photo_gallery5"/></div>
        </div>
        <div> <div className={"title_home"}><span>Новости</span></div>
            <div className={"news"}>
            <div>
                <h2>Наши новости</h2>
                <div className={"news__notes"}>
                    <h3>Международный День Солнца 2023</h3>
                    <h4>На астрономической площадке Планетария для всех гостей состоялся праздник «Солнечное настроение» с важным Звездочётом и его помощниками – Тучкой, Ветерком. <a className={"button_h"} href="/news">Подробнее</a></h4>
                </div>
                <div className={"news__notes"}>
                    <h3>Май астрономический</h3>
                    <h4>Солнечный май вдохновляет наблюдать за активностью Солнца: его протуберанцы и темные пятна в окуляре солярного телескопа на астрономической площадке Планетария (с расписанием лучше ознакомиться заранее на официальном Сайте планетария).<a className={"button_h"} href="/news">Подробнее</a></h4>
                </div>
                <div className={"news__notes"}>
                    <h3>Весенний Международный день астрономии</h3>
                    <h4>Невероятно популярны в культурно-просветительском центре «Планетарий» публичные вечерние наблюдения в телескоп, так называемый проект «Вечера тротуарной астрономии». Весной они приуроченные к Международному Дню астрономии – в этом году он отмечается 29 апреля.<a className={"button_h"} href="/news">Подробнее</a></h4> 
                </div>
            </div>
            <div>
                <h2>Новости космоса</h2>
                <div className={"news__notes"}>
                    <h3>SpaceX запустила спутник Arabsat BADR-8</h3>
                    <h4 style={{marginBottom:50}}>В субботнюю ночь, после недели задержек из-за штормовой погоды, SpaceX запустила спутник Arabsat BADR-8 на геосинхронную орбиту. Запуск был осуществлен с помощью ракеты Falcon 9 с мыса Канаверал.<a className={"button_h"} href="/news">Подробнее</a></h4>
                </div>
                <div className={"news__notes"}>
                    <h3>Астрономы обнаружили необычную планетную систему</h3>
                    <h4>Исследователи Льежского университета и CSIC с помощью телескопа НАСА TESS обнаружили систему из двух планет немного больше Земли, которые синхронно вращаются вокруг холодной звезды.<a className={"button_h"} href="/news">Подробнее</a></h4>
                </div>
                <div className={"news__notes"}>
                    <h3>НАСА и Boeing сообщили, что подготовка к июльскому испытательному полету Starliner продолжается</h3>
                    <h4>26 мая НАСА и компания Boeing заявили, что они продолжают работать над тем, чтобы запустить CST-100 Starliner в испытательный полет с экипажем в июле, несмотря на "возникающие проблемы" и опасения, высказанные комиссией<a className={"button_h"} href="/news">Подробнее</a></h4>
                </div>
            </div>
            </div>
        </div>
        <div> <div className={"title_home"}><span>Цены</span></div>
            <div className={"price"}>
                <div style={{marginRight:25}}>
                    <h3>Билет обучающегося</h3>
                    <h4>184 р.</h4>
                    <p>Организация и проведение культурно массового мероприятия. <br />
                    Несовершеннолетние дошкольного возраста, учащиеся общеобразовательных организаций, студенты.</p>
                    <a className={"button_hp"} style={{bottom:31}} href="/orientation">Подробнее</a>
                </div>
                <div>
                    <h3>Билет общий</h3>
                    <h4>220 р.</h4>
                    <p style={{marginBottom:128}}>Организация и проведение культурно массового мероприятия. <br />
                    Совершеннолетние физические лица.</p>
                    <a className={"button_hp"} href="/orientation">Подробнее</a>
                </div>
            </div>
        </div>
        <div className={"write_us"}> <img src={"./image/write_to_us.png"} className={"bacground"} alt="Банер -Напишите нам-"/>
        <div >
            <h1>Напишите нам!</h1>
            <div class="text-field">
            <input class="text-field__input" name="E-mail" placeholder="E-mail" style={{marginBottom:22}}/>
            <input class="text-field__input" name="Имя" placeholder="Имя" style={{marginBottom:22}}/>
            <textarea class="text-field__input" name="сообщение" placeholder="Ваше сообщение" style={{marginBottom:32, height:102}}/>
            <button class="text-field__btn" type="button">Отправить</button>
            </div>
        </div>  
        </div>
        </div>
}

export default HomePage