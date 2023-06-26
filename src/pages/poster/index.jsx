import React from "react";
import "./style.scss"

export const PosterPage = () => {
    return ( <React.Fragment>
    <div className={"orient_div"}>
        <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><p>Путешествия по звёздным мирам</p></div>
        </div>
        <div className={"schedule"}>
            <h1>Рассписание</h1>
            
            <div class="dropdown">
                <button class="dropbtn" style={{marginRight:60}}>Категория <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">0+</a>
                <a href="/poster">6+</a>
                <a href="/poster">12+</a>
                <a href="/poster">16+</a>
                </div>
            </div>
            <div class="dropdown" style={{marginRight:60}}>
                <button class="dropbtn" style={{width:320}}>Место проведения <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">Зал мультимедиа</a>
                <a href="/poster">Площадка у планетария</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Направление <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">Полнокупольные шоу-программы</a>
                <a href="/poster">Астрономические наблюдения</a>
                <a href="/poster">Мультимедийные программы</a>
                </div>
            </div>
            <a className={"button_poster"} href="/poster">Применить</a>
            <a className={"button_poster"} href="/poster" style={{left:-255}}>Сбросить</a>
            
        </div>
        <div className={"poster"}> 
            <div className={"conteiner_p"} style={{marginRight:23}}>
                <div className={"arrow_p left"}><div></div></div>
            </div>
            <div>
                <div className={'frame_data'}><p>29 Мая, Вт</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>30 Мая, Ср</p></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6 style={{color:'#7000A5'}}>Астрономические наблюдения</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>31 Мая, Чт</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>1 Июня, Пт</p></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>2 Июня, Сб</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>20.00</h5><h6 style={{color:'#7000A5'}}>Астрономические наблюдения</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>3 Июня, Вс</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div className={"conteiner_p"} style={{marginLeft:23}}>
                <div className={"arrow_p right"}><div></div></div>
            </div>
        </div>
    </div>
    <div className={"orient_div-mobile"}>
    <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><p>Путешествия по звёздным мирам</p></div>
        </div>
        <div className={"schedule"}>
            <h1>Рассписание</h1>
            
            <div class="dropdown" style={{marginBottom:15}}>
                <button class="dropbtn marg-btn">Категория <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">0+</a>
                <a href="/poster">6+</a>
                <a href="/poster">12+</a>
                <a href="/poster">16+</a>
                </div>
            </div>
            <div class="dropdown marg-btn">
                <button class="dropbtn width-mob" >Место проведения <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">Зал мультимедиа</a>
                <a href="/poster">Площадка у планетария</a>
                </div>
            </div>
            <div class="dropdown marg-btn">
                <button class="dropbtn">Направление <img src={"./icons/Vector.png"} alt="vector"/></button>
                <div class="dropdown-content">
                <a href="/poster">Полнокупольные шоу-программы</a>
                <a href="/poster">Астрономические наблюдения</a>
                <a href="/poster">Мультимедийные программы</a>
                </div>
            </div>
            <a className={"button_poster"} href="/poster">Применить</a>
            <a className={"button_poster marg-btn"} href="/poster">Сбросить</a>
            
        </div>
        <div className={"poster"}> 
            <div className={"conteiner_p"} style={{marginRight:15}}>
                <div className={"arrow_p left"}><div></div></div>
            </div>
            <div className={"p_none"}>
                <div className={'frame_data'}><p>29 Мая, <br /> Вт</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div className={"p_none"}>
                <div className={'frame_data'}><p>30 Мая, <br /> Ср</p></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6 style={{color:'#7000A5'}}>Астрономические наблюдения</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div className={"p_none"}>
                <div className={'frame_data'}><p>31 Мая, <br /> Чт</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div className={"p_none"}>
                <div className={'frame_data'}><p>1 Июня, <br /> Пт</p></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div >
                <div className={'frame_data'}><p>2 Июня, <br /> Сб</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>12.00 - 13.10</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>20.00</h5><h6 style={{color:'#7000A5'}}>Астрономические наблюдения</h6></div>
            </div>
            <div>
                <div className={'frame_data'}><p>3 Июня, <br /> Вс</p></div>
                <div className={'frame_time'}><h5>11.00 - 11.50</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>14.00 - 14.40</h5><h6>Полнокупольные шоу-программы</h6></div>
                <div className={'frame_time'}><h5>16.00 - 16.50</h5><h6>Полнокупольные шоу-программы</h6></div>
            </div>
            <div className={"conteiner_p"} style={{marginLeft:15}}>
                <div className={"arrow_p right"}><div></div></div>
            </div>
        </div>
    </div>
    </React.Fragment>)
}