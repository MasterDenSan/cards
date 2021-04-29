import React from "react";
import './Card.scss'

export default React.memo(function Card({card, isRoll, index, hanleRoll, order}) {

    return (
        <div className={isRoll ? "card roll" : "card"} onClick={() => hanleRoll(index)} style={{order: order + index}}>
            <img className="card__front" src={`./images/${card}.svg`} alt=""/>
            <img className="card__back" src="./images/back.svg" alt=""/>
        </div>
    )
})