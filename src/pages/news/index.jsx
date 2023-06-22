import React from "react";
import "./style.scss"

export const NewsPage = () => {
    return <div className={"orientation-news"}>
        <div  className={'prev-news'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><h1>Главные новости космоса</h1></div>
        </div>
        <div><div className={"title_news"}><span>Новости</span></div>
            <div className={"new"}>
                <h2>Наши новости</h2>
                <div className={"new__note"}>
                    <h3>Проведено очередное заседания Научно-методического Совета № 2 от 25 мая 2023 года</h3>
                    <h4>Проведено очередное заседания Научно-методического Совета № 2 от 25 мая 2023 года На повестке дня обсуждались следующие вопросы: 1. О Международном дне астрономии: вечерние публичные наблюдения на астрономической площадке... <a className={"button"} href="https://planetarium22.ru/news/14614/" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>Международный День Солнца 2023</h3>
                    <h4>На астрономической площадке Планетария для всех гостей состоялся праздник «Солнечное настроение» с важным Звездочётом и его помощниками – Тучкой, Ветерком. <a className={"button"} href="https://planetarium22.ru/news/14461/" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>Май астрономический</h3>
                    <h4>Солнечный май вдохновляет наблюдать за активностью Солнца: его протуберанцы и темные пятна в окуляре солярного телескопа на астрономической площадке Планетария (с расписанием лучше ознакомиться заранее на официальном Сайте планетария).<a className={"button"} href="https://planetarium22.ru/news/14421/" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>Весенний Международный день астрономии</h3>
                    <h4>Невероятно популярны в культурно-просветительском центре «Планетарий» публичные вечерние наблюдения в телескоп, так называемый проект «Вечера тротуарной астрономии». Весной они приуроченные к Международному Дню астрономии – в этом году он отмечается 29 апреля.<a className={"button"} href="https://planetarium22.ru/news/14375/" target="_blank" rel="noreferrer">Подробнее</a></h4> 
                </div>
                <div className={"new__note"} style={{marginBottom:10}}>
                    <h3>Международный день космонавтики 2023</h3>
                    <h4>Кому мы, жители XXI века, обязаны отдать честь за комфортную возможность – знать много интересного и увлекательного о космосе? Естественно Космонавтам… И первому космонавту – Юрию Гагарину! Космонавт ставит перед собой важные задачи! <a className={"button"} href="https://planetarium22.ru/news/14228/" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"conteiner"}>
                    <div className={"arrow left"} style={{marginRight:23}}><div></div></div>
                    <div className={"arrow right"}><div></div></div>
                </div>
            </div>
            <div className={'line'}></div>
            <div className={"new"}>
                <h2>Новости космоса</h2>
                <div className={"new__note"}>
                    <h3>SpaceX запустила спутник Arabsat BADR-8</h3>
                    <h4>В субботнюю ночь, после недели задержек из-за штормовой погоды, SpaceX запустила спутник Arabsat BADR-8 на геосинхронную орбиту. Запуск был осуществлен с помощью ракеты Falcon 9 с мыса Канаверал.<a className={"button"} href="https://www.astronews.ru/cgi-bin/mng.cgi?page=news&news=20230529190316" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>Астрономы обнаружили необычную планетную систему</h3>
                    <h4>Исследователи Льежского университета и CSIC с помощью телескопа НАСА TESS обнаружили систему из двух планет немного больше Земли, которые синхронно вращаются вокруг холодной звезды.<a className={"button"} href="https://www.astronews.ru/cgi-bin/mng.cgi?page=news&news=20230528212441" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>НАСА и Boeing сообщили, что подготовка к июльскому испытательному полету Starliner продолжается</h3>
                    <h4>26 мая НАСА и компания Boeing заявили, что они продолжают работать над тем, чтобы запустить CST-100 Starliner в испытательный полет с экипажем в июле, несмотря на "возникающие проблемы" и опасения, высказанные комиссией<a className={"button"} href="https://www.astronews.ru/cgi-bin/mng.cgi?page=news&news=20230528122941" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"}>
                    <h3>Миссии «Чанъэ» внесли огромный вклад в исследование Луны</h3>
                    <h4>Обзорная статья об исследовании Луны Китаем была опубликована в журнале Science China Earth Sciences 28 апреля. Все пять китайских миссий «Чанъэ» увенчались успехом. Первая миссия позволила получить некоторые базовые знания... <a className={"button"} href="https://www.astronews.ru/cgi-bin/mng.cgi?page=news&news=20230527214527" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"new__note"} style={{marginBottom:10}}>
                    <h3>Космический аппарат LRO исследует место падения лунного модуля HAKUTO-R</h3>
                    <h4>11 декабря 2022 года был запущен лунный модуль HAKUTO-R Mission 1. Это финансируемый из частных источников космический аппарат, который планировалось посадить на поверхность Луны. После нескольких месяцев полета к Луне... <a className={"button"} href="https://www.astronews.ru/cgi-bin/mng.cgi?page=news&news=20230526202359" target="_blank" rel="noreferrer">Подробнее</a></h4>
                </div>
                <div className={"conteiner"}>
                    <div className={"arrow left"} style={{marginRight:23}}><div></div></div>
                    <div className={"arrow right"}><div></div></div>
                </div>
            </div>
        </div>
        
    </div>
}