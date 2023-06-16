import React from "react";
import "./style.scss"

export const OrientationPage = () => {
    return <div className={"orientation"}>
        <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <h2>Направления звездной работы</h2>
        </div>
        <div className={"title"}><span>Направления</span></div>
        <div className={"d1"}>
            <div className={'items'}><img src={"./icons/kupol.png"} className={'items__im1'} alt="icon_kupol"/>
                <h1>Полнокупольные шоу-программы</h1>
                <h2>Яркие полнокупольные шоу-программы для детей и взрослых</h2>
            </div>
            <div className={'items'}><img src={"./icons/solar-system2.0.png"} className={'items__im2'} alt="icon_solar_system"/>
                <h1 style={{marginBottom:6}}>Мультимедийные программы</h1>
                <h2>Познавательные мультимедийные программы для детей и взрослых</h2>
            </div>
            <div>Главная цель планетария, вызвать в ребятах ощущение влекущей таинственности мира, его бездонной глубины, разбудить тягу к познанию, интерес к науке и желание сделать что-то доброе и прекрасное. Планетарий – уникальное место, где наука соседствует со сказкой, где знания преподносятся в столь увлекательной форме, что не могут оставить равнодушными ни детей, ни взрослых.</div>
        </div>
        <div className={'d2'}>
            <div className={"items"}><img src={"./icons/telescop2.0.png"} className={'items__im3'} alt="icon_telescop"/>
            <h1>Астрономические наблюдения</h1>
            <h2>Здесь каждый желающий может наблюдать в телескоп ночное небо</h2>
            </div>
            <div>Тротуарная астрономия – особый вид астрономических уличных наблюдений. Ведь далеко не каждый может посетить обсерваторию. На нашей астроплощадке при условии ясной безоблачной погоды и чистого неба все желающие абсолютно бесплатно могут своими глазами наблюдать лунную поверхность или солнечные протуберанцы. Такие наблюдения проводятся с помощью современных оптических телескопов. Глядя на ночное небо, вы ощутите всю красоту нашего космоса и поймете, насколько удивительна Вселенная.</div>
        </div>
        <div className={'d3'}>
            <div className={"items"}><img src={"./icons/gagarin.png"} className={'items__im4'} alt="icon_gagarin"/>
            <h1 style={{marginBottom:39}}>Мероприятия и праздники</h1>
            <h2>Праздничные мероприятия и знаменательные даты отечественной космонавтики</h2></div>
            <div>Наш Планетарий радует своих гостей не только образовательными программами, но и познавательно-развлекательными мероприятиями для детей и взрослых. День Космонавтики, День Земли, Международный День планетариев и многие другие даты не обходят вниманием в нашем «Звездном доме». Будь то конкурсы и викторины, разнообразные шоу программы в фойе и на уличной астроплощадке, тематические и событийные выставки. Будьте вместе с нами в курсе всех звездных событий!</div>
        </div>
        </div>
}

