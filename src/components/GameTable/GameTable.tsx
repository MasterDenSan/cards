import { FC, memo, useEffect, useState } from "react";
import Card from "../Card";
import "./GameTable.scss";
import getRandom from "../../Utils/Rendomizer/randomizer";
import { IGameTable } from "./types";

const GameTable: FC<IGameTable> = ({
  cards,
  onEndGame,
  onAddLeaderActionCreator,
}) => {
  const cardClone = JSON.parse(JSON.stringify(cards));
  const gameCards = [...cards, ...cardClone];
  const [openCards, setOpenCards] = useState([]);
  const [round, setRound] = useState([]);

  //Вносим в масив рандомную очередь
  useEffect(() => {
    const rendomArray = getRandom(1, 37, 37);
    gameCards.map((elem, index) => {
      elem.order = rendomArray[index];
    });
  }, []);

  const hanleRoll = (index) => {
    if (openCards.length < 2) {
      setOpenCards((cards) => [...cards, index]);
    }
  };

  //Сверка найденых карт + временные тамауты для просмотра
  useEffect(() => {
    const firstCard = gameCards[openCards[0]];
    const secondCard = gameCards[openCards[1]];
    if (
      secondCard &&
      firstCard.id === secondCard.id &&
      openCards[0] !== openCards[1]
    ) {
      round.every((val) => val !== firstCard.id) &&
        setRound((round) => [...round, firstCard.id]);
    }

    if (openCards.length > 0 && openCards.length < 3) {
      const timerId = setTimeout(() => setOpenCards([]), 5000);
      if (openCards.length > 1 && openCards.length < 3) {
        clearTimeout(timerId);
        setTimeout(() => setOpenCards([]), 1500);
      }
    }
  }, [openCards]);

  //Условие конца игры
  useEffect(() => {
    if (round.length === cards.length) {
      onEndGame();
    }
  }, [round]);

  useEffect(() => {
    return () => {
      onAddLeaderActionCreator(prompt("Введите имя:", "Аноним"));
    };
  }, []);
  return (
    <div>
      <div className="game-table">
        {gameCards.map((card, index) => {
          let isRoll = false;
          if (openCards.includes(index)) {
            isRoll = true;
          }
          if (round.includes(card.id)) {
            isRoll = true;
          }
          return (
            <Card
              key={index + card.name}
              index={index}
              card={card.name}
              order={card.order}
              isRoll={isRoll}
              hanleRoll={hanleRoll}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(GameTable);
