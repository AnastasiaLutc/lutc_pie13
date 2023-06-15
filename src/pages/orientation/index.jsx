import React from "react";
import "./style.scss"

export const OrientationPage = () => {
    return <div className={"orientation"}>
        <div  className={'prev'}><img src={"./image/planetary.png"} style={{width:100+"%"}} alt="Банер"/>
            <div><p>Направления звездной работы</p></div>
        </div>
        <div className={"title"}><span>Направления</span></div>
        <div className={"d1"}>
            <div className={'items'}><img src={"./icons/kupol.png"} className={'items__icon'} style={{width:93}} alt="Полнокупольные шоу-программы"/>
                <h2>Полнокупольные шоу-программы</h2>
                <h3>Яркие полнокупольные шоу-программы для детей и взрослых</h3>
            </div>
            <div className={'items'}><img src={"./icons/solar-system2.0.png"} className={'items__icon'} style={{width:107}} alt="Мультимедийные программы"/>
                <h2>Мультимедийные программы</h2>
                <h3>Познавательные мультимедийные программы для детей и взрослых</h3>
            </div>
            <div>Главная цель планетария, вызвать в ребятах ощущение влекущей таинственности мира, его бездонной глубины, разбудить тягу к познанию, интерес к науке и желание сделать что-то доброе и прекрасное. Планетарий – уникальное место, где наука соседствует со сказкой, где знания преподносятся в столь увлекательной форме, что не могут оставить равнодушными ни детей, ни взрослых.</div>
        </div>
        <div>
            <div>Астрономические наблюдения</div>
            <div></div>
        </div>
        <div>
            <div> мероприятия и праздники</div>
            <div></div>
        </div>
        </div>
}

