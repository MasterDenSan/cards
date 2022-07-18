import {memo} from 'react'
import './Card.scss'


interface ICard {
    card: string
    isRoll: boolean
    index: number
    hanleRoll: (index: number) => void
    order: number
}

export default memo(function Card({card, isRoll, index, hanleRoll, order}: ICard): JSX.Element  {

    return (
        <div className={isRoll ? "card roll" : "card"} onClick={() => hanleRoll(index)} style={{order: order + index}}>
            <img className="card__front" src={`./images/${card}.svg`} alt=""/>
            <img className="card__back" src="./images/back.svg" alt=""/>
        </div>
    )
})