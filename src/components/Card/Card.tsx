import './Card.scss';
import {FC, memo} from 'react';
import {ICard} from './types';

const Card: FC<ICard> = ({card, isRoll, index, hanleRoll, order, ...otherProps} ): JSX.Element => {
    console.log('fffff')
    console.log("fffff")
    return (
        <div
            className={isRoll ? 'card roll' : 'card'}
             onClick={() => hanleRoll(index)}
             style={{order: order + index}} {...otherProps}
        >
            <img className='card__front' src={`./images/${card}.svg`} alt=''/>
            <img className='card__back' src='./images/back.svg' alt=''/>
        </div>
    );
};

export default memo(Card);